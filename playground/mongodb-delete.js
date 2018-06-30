// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err){
    return console.log('Unable to connect to database server');
  }
  console.log('Connected to MongoDB Server');

  // db.collection('Todos').deleteMany({text:"Eat lunch"}).then((result) => {
  //   console.log(result);
  // });

  // db.collection('Todos').deleteOne({text:"Eat lunch"}).then((result) => {
  //   console.log(result);
  // });

// db.collection('Todos').findOneAndDelete({completed:false}).then((result) =>{
//   console.log(result);
// });

// db.collection('Users').deleteMany({name:"Nomit Verma"}).then((result) => {
//   console.log(result);
// });

// db.collection('Users').deleteOne({_id:new ObjectID('5b366e5f7d3f0f170809418c')}).then((result) => {
//   console.log(result);
// });



  // db.close();
});
