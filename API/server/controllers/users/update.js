
const {User}=require('../../models')



const update = () => async (req, res, next) => {

   
   const {id}=req.params

   //there is update one and update many,that update any documents satisfying that condition
   const user=await User.findOne({_id:id})
   const currentUser=await User.findOne({_id:req.user._id.toString()})    //the user that is calling the api
   var currentUserRole=0

   if(req.session.role)
   {
     currentUserRole=req.session.role
   }
   else{
     currentUserRole=currentUser.role
   }

   //1)//format//await User.findOneAndUpdate(filter, update);
   if(user){
     if((id==req.user._id.toString())||(currentUserRole==1))
      {
       await User.findOneAndUpdate({"_id":id}, req.body);
       res.send("Profile updated successfully")
      }
      else{

         res.status(400).send("You are not authorized to  update this user")
      }

   }

   else{

      res.status(400).send("This user does not exist")
   }

  //2//

    
//await User.updateMany({ age: age }, req.body);
//console.log('users updated')







}




module.exports={update}