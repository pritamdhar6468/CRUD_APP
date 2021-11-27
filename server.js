const express = require('express');
const dotenv= require('dotenv');
const morgan= require('morgan');
const bodyparser=require('body-parser');
const path=require('path');
const ejs= require('ejs');
const hbs= require('hbs');
//const mongoose= require('mongoose');

const connectDB = require('./server/database/connection');

const app = express();

dotenv.config({path:'config.env'})
const PORT= process.env.PORT||8080

app.use(morgan('tiny'));

//mongodb connection
connectDB();


//parse request to body parser
app.use(bodyparser.urlencoded({extended:true}))


app.set('view engine','ejs');


//load asset
app.use('/css',express.static(path.resolve(__dirname,"asset/css")))
app.use('/img',express.static(path.resolve(__dirname,"asset/img")))
app.use('/js',express.static(path.resolve(__dirname,"asset/js")))

//LOAD Routes
app.use('/', require('./server/routes/router'))

app.listen(PORT,()=>{console.log(`server running on http://localhost:${PORT}`)});