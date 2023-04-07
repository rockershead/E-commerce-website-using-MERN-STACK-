




const update = () => async (req, res, next) => {

   
   const {item,quantity}=req.body


   //only allowed to change quantity


   const { cart } = req.session;
   console.log(cart)
    
   if (!cart) {
     res.send('You have no cart session');
   } else {

      for(var i=0;i<cart.items.length;i++)
      {

        if((cart.items[i].item==item)&&(cart.items[i].quantity!=quantity)) //make sure the quantity got change
        {   console.log(cart.items[i])
            cart.items[i].quantity=quantity
         break;
        }

      }

     
   }
   

   res.send("Update done")

}




module.exports={update}