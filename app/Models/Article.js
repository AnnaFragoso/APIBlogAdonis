'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class Article extends Model {
    users () {
        return this.hasOne('App/Models/User', 'id_users', 'id');
    }

    categories () {
        return this.hasOne('App/Models/Category', 'id_category', 'id');
    }
}

module.exports = Article
