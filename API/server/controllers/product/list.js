
const {Product}=require('../../models')
const fs = require('fs');


const listAll = () => async (req, res, next) => {




   


    Product.find()
    .then(result => {
      res.send(result);
    //console.log(result[0].product_image.data.toString('base64'))
    //on react frontend side do .product_image.data.toString('base64') to convert to base64.Then on react,
    //return <img src={`data:image/png;base64,${base64String}`} width="300"/>  
     
    

    })
    .catch(err => {
      console.log(err);
    });









}




module.exports={listAll}