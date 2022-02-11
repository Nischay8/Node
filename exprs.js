
const express=require('express');
const bodyParser=require('body-parser');

const adminRoutes=require('./routes/admin')

const shoprouter=require('./routes/shop')
const path=require('path');

const app=express();
app.use(bodyParser.urlencoded({extended:false}));

app.set('view engine','ejs');
app.set('views','views')

app.use(adminRoutes.routes);
app.use(shoprouter);


app.use((req,res,next)=>{
    res.status(404).render('404',{pageTitle:'Page Not Foundwa'});
});
// const server=http.createServer(app);

// server.listen(3000);


app.listen(3000);