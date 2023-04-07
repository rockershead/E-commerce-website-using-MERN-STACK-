
const {User}=require('../../models')
const { uuid } = require('uuidv4');
const { hashPassword, comparePassword } = require('../../utils');

const register = () => async (req, res, next) => {



const {email,password,contact,age}=req.body

var user=await User.findOne({email:email})



if(user){

  res.status(400).send("This user already exists.")
}

else

 {user=new User({"email":email,"password":hashPassword(password),"contact":contact,"age":age})

user.save()
.then(result => {
  res.send(result);
})
.catch(err => {
  res.status(400).send(err);
});}












}




module.exports={register}