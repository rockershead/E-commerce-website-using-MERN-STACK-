const express = require('express');

const { errorHandler } = require('../middleware');


// List all models here

const { User } = require('../models/user');


// List all controllers here

const users = require('../controllers/users');
const products = require('../controllers/product');
const cart=require('../controllers/shopping-cart');
const shoppingCart = require('../controllers/shopping-cart');



const routersInit = config => {
  const router = express();
  //router.use(permissionHandler)
  router.use('/user', users());

  router.use((req, res, next) => {
    //check if user authenticated
   // console.log(req.user);
    if (req.user) next();
    else res.send(401);
  });

  // Define API Endpoints
  
  
  router.use('/product', products());
  router.use('/cart',shoppingCart());
  


  // Catch all API Errors
  router.use(errorHandler);
  return router;
};

module.exports = routersInit;
