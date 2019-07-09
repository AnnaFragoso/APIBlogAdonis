'use strict'

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
const Route = use('Route');

Route.post('/register', 'AuthController.register');
Route.post('/authenticate', 'AuthController.authenticate');

//User
Route.get('user', 'UserController.index');
Route.get('/user/:id', 'UserController.show');
Route.delete('/user/:id', 'UserController.destroy');

//Article
Route.post('/article', 'ArticleController.store').middleware('auth');
Route.get('/article', 'ArticleController.index');
Route.put('/article/:id', 'ArticleController.update');
Route.delete('/article/:id', 'ArticleController.destroy');

//Category
Route.post('/category', 'CategoryController.store');
Route.get('/category', 'CategoryController.index');
Route.put('/category/:id', 'CategoryController.update');
Route.get('/category/:id', 'CategoryController.show');
Route.delete('/category/:id', 'CategoryController.destroy');