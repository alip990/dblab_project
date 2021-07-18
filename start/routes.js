'use strict'

const { route } = require('@adonisjs/framework/src/Route/Manager');

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

// Route.on('/').render('index')
Route.get('/buy-list' ,'OrderController.buy_list')

Route.on('/signup').render('auth.signup');

Route.post('/signup', 'UserController.create').validator('CreateUser');

Route.on('/login').render('auth.login');
Route.post('/login', 'UserController.login').validator('LoginUser');

Route.get('/logout', async ({ auth, response }) => {
    await auth.logout();
    return response.redirect('/');
});
Route.on('/newfood').render('admin.newfood')
Route.post('/newfood', 'FoodController.create').validator('NewFood');
Route.get('/','FoodController.get_all')
Route.get('addtoorder/:foodId' ,'OrderController.addtoorder')
Route.get('/orderlist','OrderController.order_list' );
Route.delete('/orderlist/:orderId','OrderController.deleteOrder');
Route.post('/orderlist/deleteorderdetail' , 'OrderController.deleteorderdetail');
Route.post('/oderlist/cahngeOrderItem','OrderController.changeorderDetails');
Route.post('/orderlist/deleteorder' , 'OrderController.deleteOrder');
Route.post('/orderlist/updatestatus' , 'OrderController.updateOrderstatus') ; 
Route.post('/orderlist/verifyOrder' , 'OrderController.verifyOrder') ; 


