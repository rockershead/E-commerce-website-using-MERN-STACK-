const { Router: router } = require('express');
const passport = require('passport');

const { register } = require('./register');
const {listAll}=require('./list')
const {show}=require('./show')
const {update}=require('./update')
const {deleteUser}=require('./deleteUser')
const {logout}=require('./logout')
const {setRole}=require('./setRole')
const {checkUserExists}=require('./checkUserExists')
const{sendMailForPasswordReset}=require('./sendMailForPasswordReset')





module.exports = () => {
  const api = router();
  api.post('/checkUserExists',checkUserExists());
  api.post('/sendMailForPasswordReset',sendMailForPasswordReset());
  api.post('/', register());
  api.get('/', listAll());
  api.get('/:id', show());
  api.put('/:id', update());
  api.delete('/:id', deleteUser());
  api.post('/login',passport.authenticate('local'), (req, res) => {
    //console.log('Logged In');
    res.send(200);
  })
  //router.get('/google', passport.authenticate('google'), (req, res) => {
    //res.send(200);
  //});
  
  ///router.get(
   // '/google/redirect',
    //passport.authenticate('google'),
    //(req, res) => {
      //res.send(200);
   // }
  //);
  api.post('/setRole/:id', setRole());
  api.post('/logout', logout());
 

  return api;
};
