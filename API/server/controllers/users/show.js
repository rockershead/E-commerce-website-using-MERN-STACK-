//User.find( { age: { $gt: 4 } } )   eg query

//we can findById.But here I am using other fields to find
const {User}=require('../../models')

//can only be called by respective user unless you are admin

const show = () => async (req, res, next) => {

    const {id}=req.params
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

if(user){
if((id==req.user._id.toString())||currentUserRole==1)
{
    res.send(user)
}
     

else{

  res.status(400).send("You are not authorized to view this user profile")

}
}

else{
    res.status(400).send("This user does not exist")
}

 





}




module.exports={show}