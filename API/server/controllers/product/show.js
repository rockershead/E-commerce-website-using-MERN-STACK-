//User.find( { age: { $gt: 4 } } )   eg query

//we can findById.But here I am using other fields to find
const {Product}=require('../../models')



const show = () => async (req, res, next) => {

const {uuid}=req.params

const product=await Product.findOne({uuid:uuid})     //will get all objects satisfying this condition



 res.send(product)





}




module.exports={show}