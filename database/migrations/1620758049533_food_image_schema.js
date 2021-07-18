'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class FoodImageSchema extends Schema {
  up () {
    this.create('food_images', (table) => {
      table.increments('imageId')
      table.integer('foodId').notNullable()
      table.string('path',600).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('food_images')
  }
}

module.exports = FoodImageSchema
