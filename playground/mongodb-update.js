// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err){
    return console.log('Unable to connect to database server');
  }
  console.log('Connected to MongoDB Server');

// db.collection('Todos').findOneAndUpdate({
//   _id:new ObjectID('5b36e8918c7b1f7463f5f1da')
// }, {
//   $set: {
//     completed: true
//   }
// },{
//   returnOriginal: false
// }).then((result) => {
//   console.log(result);
// });

db.collection('Users').findOneAndUpdate({
  _id:new ObjectID('5b366f03bd9f2512a060952e')
}, {
  $set: {
    name: "Nomit Verma"
  },
  $inc: {
    age:1
  }
},{
  returnOriginal: false
}).then((result) => {
  console.log(result);
});

  // db.close();
});
