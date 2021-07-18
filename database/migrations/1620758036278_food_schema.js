'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class FoodSchema extends Schema {
  up () {
    this.create('foods', (table) => {
      table.increments('foodId')
      table.string('name',255).notNullable()
      table.string('categoryName' ,255).notNullable()
      table.text('description')
      table.float('price').notNullable()
      table.timestamps()

    })
  }

  down () {
    this.drop('foods')
  }
  
  // food_images() {
  //   return this.hasMany('App/Models/Job');
  // }
}

module.exports = FoodSchema
