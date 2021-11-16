const express = require('express');
const routes = require('./routes/routes');

// const mongoose =require('mongoose');
 require('./Database/database')


const app = express();

app.use(express.json());


app.use(routes)




const PORT = process.env.PORT || 5000;


app.listen(PORT,()=> console.log("We Are running " + PORT));