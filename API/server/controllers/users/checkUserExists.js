
const {User}=require('../../models')



const checkUserExists = () => async (req, res, next) => {

   
   const {email}=req.body

   //there is update one and update many,that update any documents satisfying that condition
   const user=await User.findOne({email:email})

   
   

   
   //1)//format//await User.findOneAndUpdate(filter, update);

     if(user){
      
      
      res.send(user._id.toString())
      

      
         
      
      
     }

      else{
         res.status(400).send("This user does not exist")
      }

  //2//

    
//await User.updateMany({ age: age }, req.body);
//console.log('users updated')







}




module.exports={checkUserExists}