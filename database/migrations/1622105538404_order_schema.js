'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class OrderSchema extends Schema {
  up () {
    this.create('orders', (table) => {
      table.increments('OrderId')
      table.integer('user_id').unsigned().references('id').inTable('users')
      table.time('time_ordered')
      table.time('time_deliverd')
      table.integer('status')
      table.integer('price')
      table.timestamps()
    })
  }

  down () {
    this.drop('orders')
  }
  order_details(){
    return this.hasMany('App/Models/OrderDetail')
  }
}

module.exports = OrderSchema
