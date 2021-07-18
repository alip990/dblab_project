'use strict'
const Food = use ('App/Models/Food');
const FoodImage = use ('App/Models/FoodImage');
const Helpers = use('Helpers');
const Database = use('Database');
class FoodController {
    async create({ request, response,session}) {
        console.log(request.only(['name','categoryName','description','price',])); 
        const food = await Food.create(request.only(['name','categoryName','description','price',]));
        //  const values = request.only(['name','categoryName','description','price',])
        
        //const food = await Database.raw("insert into foods (name,categoryName , description,price) values (?,?,?,?)",
        //                [values.name, values.categoryName , values.description,values.price])
        
        const food_img_file = request.file('food_img',{types:['image']}) ;         const file_name = String(Date.now()) + '.png'
        await food_img_file.move(Helpers.publicPath('food_images'), {name : file_name})
        
        if (!food_img_file.moved()){
            return food_img_file.error() ;
        }
        const food_image = await FoodImage.create({'foodId':food.id ,'path': file_name } ) ; 
        session.flash({ notification:"food  added sucssesfully ! " })
        return response.redirect('/newfood');
        
    
    }
    async get_all({request , response , view,auth}){
        const foods = await Database.raw(`SELECT * from foods
                                          JOIN food_images on foods.foodId = food_images.foodID`) ; 
        var foodbycat= {}
        for (var food in foods[0]){
           if ( foodbycat[foods[0][food]["categoryName"]]){
            foodbycat[foods[0][food]["categoryName"]].push(foods[0][food]) ; 
           }    
           else {
            foodbycat[foods[0][food]["categoryName"]] = [foods[0][food]] ; 
           }       
        }
        console.log(auth.user)
        let userOrders ;
        if (auth.user){
            userOrders = await Database.raw(`SELECT 
                                                time_deliverd , 
                                                time_ordered , 
                                                status , 
                                                orders.price as orderprice ,
                                                quantity,total_price,name  ,
                                                categoryName ,
                                                description  
                                                FROM orders 
                                                JOIN order_details on orders.orderId = order_details.order_id 
                                                JOIN foods on foods.foodId = order_details.food_id 
                                                WHERE user_id =${auth.user.id} and status =1`
                                                 )
        }
      // return userOrders
       return view.render('index',{  foodbycat, userOrders }   )
        
    }

}

module.exports = FoodController
