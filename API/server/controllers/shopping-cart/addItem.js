




const addItem = () => async (req, res, next) => {



const {item,quantity}=req.body

const cartItem = { item, quantity };

//var addItem=await User.findOne({email:email})


const { cart } = req.session;     //check if there is cart in the current session
  if (cart) {
    req.session.cart.items.push(cartItem);
  } else {
    req.session.cart = {
      items: [cartItem],
    };
  }
  res.send(201);













}




module.exports={addItem}