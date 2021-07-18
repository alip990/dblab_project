'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserSchema extends Schema {
  up () {
    this.create('users', (table) => {
      table.increments()
      table.string('name', 80).notNullable()
      table.string('email', 254).notNullable().unique()
      table.string('password', 60).notNullable()
      table.string('address', 400)
      table.string('phone', 13)
      table.bool('isAdmin')
      table.bool('isSuperAdmin')
      table.timestamps()
    })
  }

  down () {
    this.drop('users')
  }
  orders(){
    return this.hasMany('App/Models/Order')
  }
}

module.exports = UserSchema
