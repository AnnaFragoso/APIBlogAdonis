'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ArticleSchema extends Schema {
  up () {
    this.create('articles', (table) => {
      table.increments()
      table.string('title', 80)
      table.string('body', 300)
      table
        .integer('id_category')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('categories')
      table 
        .integer('id_users')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('users')
      table.timestamps()
    })
  }

  down () {
    this.drop('articles')
  }
}

module.exports = ArticleSchema
