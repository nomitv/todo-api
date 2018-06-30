const {ObjectId} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');
// var id = '5b3748318c7b1f7463f5fbb711';
//
// if(!ObjectId.isValid(id)){
//   console.log('ID not valid');
// }

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos',todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo',todo);
// });

// Todo.findById(id).then((todo) => {
//   if(!todo){
//     return console.log('Id not found');
//   }
//   console.log('Todo By Id',todo);
// }).catch((e) => console.log(e));

var id = '5b36f8474201ee1b2404f4d2';

User.findById(id).then((user) => {
  if(!user){
    return console.log('User not found');
  }
  console.log('User By Id',user);
}).catch((e) => console.log(e));
