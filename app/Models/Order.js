'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Order extends Model {

    orderdtails(){
        return this.hasMany('App/Model/OrderDetail')
    }
}

module.exports = Order
