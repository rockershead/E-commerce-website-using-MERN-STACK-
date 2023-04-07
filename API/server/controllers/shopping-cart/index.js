const { Router: router } = require('express');


const { addItem } = require('./addItem');
const {listAll}=require('./listAll')
//const {show}=require('./show')
const {update}=require('./update')
const {deleteItem}=require('./delete')







module.exports = () => {
  const api = router();

  api.post('/', addItem());
  api.get('/', listAll());
  //api.get('/:uuid', show());
  api.put('/', update());
  api.delete('/', deleteItem());
 

  return api;
};
