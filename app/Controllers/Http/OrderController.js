'use strict'


const Database = use('Database') 
class OrderController {
    async addtoorder({ request, response, auth,params}){
        const date = new Date();         
        var orderId = undefined ;
        try {// #todo write this in middleware 
            await auth.check(); 
          } catch (error) {
           return  response.send('You are not logged in')
          }

        const food = await Database.table('foods').where('foodId','=',params.foodId).first()
        if (!food){
            throw Error("food does not exitst in database"); 
        }
        const userOrders =  await Database.raw(`SELECT * FROM orders 
                                                WHERE user_id =${auth.user.id} AND status = 1 ` )
                                 // user must have max one unpayed order 
        if(userOrders[0][0] !=undefined) { //status = 1 mean order is unpayed so we can use it to add more items
            //console.log('unpayed order already exist ' + JSON.stringify(userOrders));
            orderId = userOrders[0][0].OrderId ; 
          // console.log('order is   ' + JSON.stringify(userOrders[0][0])) ;

        }else { // user have not any unpayed order 
            orderId = await Database
                        .table('orders')
                        .insert({ 'user_id' : auth.user.id ,'status' :1 ,
                                "created_at":date ,"updated_at":date , "price":0 }) ; 
           // console.log('create new unpayed order  ' + orderId) ;
        }

        await this.add_orderdetails(orderId ,food , 1);
        return response.redirect('/');

    }
    async add_orderdetails(orderId,food ,quantity ){
        const order_details = await Database.raw(` SELECT * FROM order_details 
                                                WHERE order_id = ${orderId} AND food_id =${food.foodId}`) 
      //  console.log('Orderdetails where found ' + JSON.stringify(order_details[0][0]));                       
        
        if (order_details[0][0]){
            await Database.table('order_details')
                    .where('order_id','=',orderId)
                    .andWhere('food_id','=',food.foodId)
                    .update({'quantity': order_details[0][0].quantity +quantity ,
                              'total_price':order_details[0][0].total_price +quantity * food.price
                    }) 
        //    console.log('order detail was updated');       
        }else {
            await Database.table('order_details').insert({
                'order_id' : orderId,
                'food_id': food.foodId ,
                'total_price': food.price * quantity ,
                'quantity': quantity

            });
            
            
          //  console.log('order details was created !')
        }
        await Database.raw(`UPDATE orders 
                            SET price = price + ${food.price * quantity} 
                            WHERE orderID = ${orderId}`);
        return ; 

    }async buy_list({auth , view }){
        const userOrders = await Database.raw(`SELECT  
                                               OrderId,
                                               order_details.id,
                                               time_deliverd , 
                                               time_ordered ,
                                               status , 
                                               orders.price as orderprice ,
                                               quantity,total_price,name  , 
                                               categoryName , 
                                               description   
                                               FROM orders JOIN order_details ON orders.orderId = order_details.order_id 
                                               JOIN foods ON  foods.foodId = order_details.food_id where user_id =${auth.user.id} AND status =1`
                              )    ;
        //return userOrders 
        if(userOrders[0].length >0){
            return view.render('buy-list',{ userOrders}   )
        }else{
            return " you have not any item to buy "
        }
    }
    async order_list({auth, view}){
        var orders={}
        const orderlist = await Database.raw(`SELECT 
                                            OrderId ,
                                            time_ordered , 
                                            time_deliverd , 
                                            status , 
                                            orders.price as orderprice , 
                                            order_details.id , 
                                            foods.name  as foodname , 
                                            quantity,total_price as orderdetailprice ,
                                            users.name as username ,
                                            users.id as userid ,
                                            Address,
                                            phone
                                            FROM orders 
                                            JOIN order_details on orders.orderId= order_details.order_id 
                                            JOIN users on orders.user_id = users.id  
                                            JOIN foods on order_details.food_id = foods.foodId `)
        for (var order  of orderlist[0]){
            if ( orders[order['OrderId']]){
                orders[order['OrderId']].push(order)
               }    
            else {
                orders[order['OrderId']] = [order]
            }            }

        return view.render('admin/orderslist',{orders})  ;
    }



    async deleteorderdetail({request } ){// todo 
      //  console.log("in delte Orderdetail  " +request.only(['order_detailId'])['order_detailId']);
        await Database.raw('DELETE FROM order_details WHERE id = ?' , request.input('order_detailId'))
    }
    async deleteOrder({auth,request,params}){
        //console.log("in delte Order " + request.input('orderId') )
        await Database.raw('DELETE FROM orders WHERE OrderId = ?' , request.input('orderId'))
        await Database.raw('DELETE FROM order_details WHERE order_id = ?' , request.input('orderId') )

    }
    async changeorderDetails({auth , request   }){
        //console.log('user' + auth.user)
       // console.log("request " + JSON.stringify(request.all())) 
       //console.log(request.input(parseInt('quantity')))
       const order_detail = await Database.raw(`select * from order_details where id = ${request.input('orderdetailId')} `)
       await Database.raw(`UPDATE order_details SET quantity= ${request.input('quantity')} , total_price = ${request.input('total_price')}
                            WHERE  id = ${request.input('orderdetailId')}`) ; 
       await Database.raw (`UPDATE orders SET price = price + ${request.input('total_price') - parseInt( order_detail[0][0]['total_price'])}  WHERE OrderId =${ order_detail[0][0]['order_id'] }`);

        
    }
    async updateOrderstatus({auth , request ,response}){
        console.log("update  " + JSON.stringify(request.all())) 

        await Database.raw(`UPDATE orders SET status = 2 WHERE orderId  = ${request.input('orderId')} `)
        response.redirect('/')

    }
    async verifyOrder({auth , request }){
        console.log("update  " + JSON.stringify(request.all())) 

        await Database.raw(`UPDATE orders SET status = 3 WHERE orderId  = ${request.input('orderId')} `)

    }
    

}

module.exports = OrderController
