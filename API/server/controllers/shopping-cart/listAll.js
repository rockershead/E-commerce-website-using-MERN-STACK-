




const listAll = () => async (req, res, next) => {


    const { cart } = req.session;
    
    if (!cart) {
      res.send('You have no cart session');
    } else {
      res.send(cart);
    }




    








}




module.exports={listAll}