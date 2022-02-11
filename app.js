const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const mongoose=require('mongoose');

const errorController = require('./controllers/error');
// const user=require('./models/user')


const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// app.use((req, res, next) => {
//   user.findById('6203f474a3c57ae69db33c7e')
//     .then(user => {
//       req.user = user;
//       next();
//     })
//     .catch(err => console.log(err));
//   next();
// });

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

mongoose.connect('mongodb+srv://Nischay1:Nischay2@cluster0.b3vbq.mongodb.net/product?retryWrites=true&w=majority').then(result=>{
  console.log('Contd');
  app.listen(3000)
}).catch(err=>{
  console.log(err)
})
