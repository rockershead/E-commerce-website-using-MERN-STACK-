

const {User}=require('../../models')

require('dotenv').config({path:'../../../.env'});

const sendgrid = require('@sendgrid/mail');
//const SENDGRID_API_KEY = "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"
sendgrid.setApiKey(process.env.SENDGRID_API_KEY)

const sendMailForPasswordReset = () => async (req, res, next) => {

   //const {id}=req.params
   
   const msg = {

    to: 'zahir.inspireme@gmail.com',

  // Change to your recipient

    from: 'zahir@pyloncity.com',

  // Change to your verified sender

    subject: 'Sending with SendGrid Is Fun',

    text: 'Easy to do anywhere, even with Node.js',

    //html: '<strong>and easy to do anywhere, even with Node.js</strong>',

 }

 sendgrid.send(msg).then((resp) => {

      console.log('Email sent\n', resp)

    })

    .catch((error) => {

      console.error(error)
      console.log(error.response.body.errors)

  })








}




module.exports={sendMailForPasswordReset}