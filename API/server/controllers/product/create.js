
const {Product}=require('../../models')
const { uuid } = require('uuidv4');
const fs = require('fs');

var multer = require('multer');







const create = () => async (req, res, next) => {

  var product;

    //Storage
const Storage=multer.diskStorage({
  
    destination:"uploads",
    filename:(req,file,cb)=>{
      cb(null,file.originalname)
    }
  
  })
  
  const upload=multer({storage:Storage}).single('product_image')

 
upload(req,res,async (err)=>{
    if(err)
    {
        res.send(err)
    }

    else{
        console.log(req.body.name)

        console.log(req.file.filename)
        if(Product)
        { product=await Product.findOne({name:req.body.name})}
        
        else{
        product=new Product({"product_image":{data:fs.readFileSync("uploads/" + req.file.filename),contentType:'image/jpg'},"description":req.body.description,"price_info":req.body.price_info,"name":req.body.name,"uuid":uuid()})
        
         
        
        product.save()
        .then(result => {
          res.send(result);
        })
        .catch(err => {
          res.status(400).send(err);
        });}
        
        
        
        if(product){
        
          res.status(400).send("This product already exists.")
        }
        
        else
        
         {
            product=new Product({"product_image":{data:fs.readFileSync("uploads/" + req.file.filename),contentType:'image/jpg'},"description":req.body.description,"price_info":req.body.price_info,"name":req.body.name,"uuid":uuid()})
        
         
        
        product.save()
        .then(result => {
          res.send(result);
        })
        .catch(err => {
          res.status(400).send(err);
        });}

    }
})



}



















module.exports={create}