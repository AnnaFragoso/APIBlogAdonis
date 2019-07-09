'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Article extends Model {
    users () {
        return this.hasOne('App/Models/User');
    }

    categories () {
        return this.hasOne('App/Models/Category');
    }
}

module.exports = Article
