'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class OrderDetailsSchema extends Schema {
  up () {
    this.create('order_details', (table) => {
      table.increments()
      table.integer('food_id')
      table.integer('order_id')
      table.integer('quantity')
      table.integer('total_price')
    })
  }

  down () {
    this.drop('order_details')
  }
}

module.exports = OrderDetailsSchema
