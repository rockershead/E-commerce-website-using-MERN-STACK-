
const {User}=require('../../models')



const listAll = () => async (req, res, next) => {







    User.find()
    .then(result => {
      res.send(result);
    })
    .catch(err => {
      console.log(err);
    });









}




module.exports={listAll}