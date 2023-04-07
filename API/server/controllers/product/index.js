const { Router: router } = require('express');


const { create } = require('./create');
const {listAll}=require('./list')
//const {show}=require('./show')
//const {update}=require('./update')
//const {deleteUser}=require('./deleteUser')







module.exports = () => {
  const api = router();

  api.post('/', create());
  api.get('/', listAll());
  //api.get('/:uuid', show());
  //api.put('/:uuid', update());
  //api.delete('/:uuid', deleteUser());
 

  return api;
};
