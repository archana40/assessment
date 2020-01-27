const express=require('express');

const app=express();
const cors = require('cors')

const bodyParser = require('body-parser');
const mongoose = require('mongoose');
let mongodbURI = "mongodb://localhost:27017/myOwnProject";
app.use(cors());

const productRoutes=require('./routes/add-product');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
 app.use(productRoutes);
mongoose.connect(mongodbURI, { useNewUrlParser: true }).then(res => {    //then and catch are promises
   
        console.log("mongodb connected successfully");
        app.listen(4000);
        console.log("app is listening to port number 4000");
            
}).catch(err => {
    console.log(err);
});
