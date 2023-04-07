
const {Product}=require('../../models')



const deleteProduct = () => async (req, res, next) => {

   
   const {uuid}=req.params

   //there is update one and update many,that update any documents satisfying that condition
   const product=await Product.findOne({uuid:uuid})

   //1)//format//await User.findOneAndUpdate(filter, update);

     if(product){
      await Product.deleteOne({"uuid":uuid});
      res.send("Product record deleted successfully")}

      else{
         res.status(400).send("This product does not exist")
      }

  //2//

    
//await User.updateMany({ age: age }, req.body);
//console.log('users updated')







}




module.exports={deleteProduct}