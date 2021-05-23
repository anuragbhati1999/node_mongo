const express= require('express');
const morgan=require('morgan');
const mongoose=require('mongoose');
const blogRoutes =require('./routes/blogRoutes');

//connect to mongodb
const dbURl='mongodb+srv://anurag:25071999@nodetuts.euaty.mongodb.net/nodetuts?retryWrites=true&w=majority';
mongoose.connect(dbURl,{ useNewUrlParser: true, useUnifiedTopology: true })
    .then( (result)=>{app.listen(9000);})
    .catch( (err)=>{console.log(err);})


// express app
const app= express();

//register fview engine

app.set('view engine', 'ejs');


app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));



app.get('/', (req,res)=>{
  res.redirect('/blogs');
});

app.get('/about', (req,res)=>{

 res.render('about',{title:"About"});
});

app.use('/blogs',blogRoutes);

app.use( (req,res)=>{
  res.status(404).render('404',{title:"404"});
});