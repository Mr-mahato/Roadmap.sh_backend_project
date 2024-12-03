const express = require('express');
const app = express();
const morgan = require('morgan');
const { adminRouter } = require('./Routes/AdminRoutes');
app.use(morgan('dev'));
require('dotenv').config();
const PORT = process.env.PORT || 3000;


app.use(adminRouter)
app.listen(PORT,(err)=>{
    if(err){
        console.log(err);
    } 
    console.log(`Server started at http://localhost:${PORT}`)
})