




const deleteItem = () => async (req, res, next) => {

   
  
  const {item} =req.body


   const { cart } = req.session;
   

   if (!cart) {
    res.send('You have no cart session');
  } else {

     for(var i=0;i<cart.items.length;i++)
     {

       if(cart.items[i].item==item) //make sure the quantity got change
       {   cart.items.splice(i,1)
        break;
       }

     }

    res.send("Deletion done")
  }



}




module.exports={deleteItem}