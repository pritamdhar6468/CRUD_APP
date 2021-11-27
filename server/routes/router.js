

const express = require('express');
const route = express.Router()
const services = require('../services/render');
const controller = require('../conroller/controller');

/**
 * @description root route
 * @method GET
 */

route.get('/', services.homeRoutes);

/**
 * @description add_user
 * @method GET
 */

route.get('/add-user', services.add_user);


/**
 * @description update_user
 * @method GET
 */
route.get('/update_user', services.update_user);



//API
route.post('/api/users',controller.create);
route.get('/api/users',controller.find);
route.put('/api/users/:id',controller.update);
route.delete('/api/users/:id',controller.delete);

module.exports=route