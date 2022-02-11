// const mongodb=require('mongodb');
// const getdb=require('../util/database').getdb;
// const ObjectId=mongodb.ObjectId;
// class User{
//   constructor(username,email){
//     this.name=username;
//     this.email=email;
//   }
//   save(){
//     const db=getdb();
//     return db.collection('users').insertOne(this)
//   }
//   static findById(userid){
//     const db=getdb();
//     return db.collection('user').findOne({_id:new ObjectId(userid)})
//   }
// }
// module.exports = User;
