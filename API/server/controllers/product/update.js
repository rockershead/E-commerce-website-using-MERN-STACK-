
const {Product}=require('../../models')



const update = () => async (req, res, next) => {

   
   const {uuid}=req.params

   //there is update one and update many,that update any documents satisfying that condition


   //1)//format//await User.findOneAndUpdate(filter, update);
      await Product.findOneAndUpdate({"uuid":uuid}, req.body);
      res.send("Profile updated successfully")

  //2//

    
//await User.updateMany({ age: age }, req.body);
//console.log('users updated')







}




module.exports={update}