
const {Session}=require('../../models')



const logout = () => async (req, res, next) => {



    //console.log(req.session)
    //console.log(req.session.id)


    const session_id=await Session.findOne({_id:req.session.id})

    if(session_id)
    {
        await Session.deleteOne({_id:req.session.id})
        res.send("User logged out")
    }

    else{

        res.status(400).send("You are not logged in yet")
    }
    









}




module.exports={logout}