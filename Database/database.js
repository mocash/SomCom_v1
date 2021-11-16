const mongoose = require('mongoose');


const dbconetect =  'mongodb://localhost:27017/';
mongoose.connect(dbconetect,{ useNewUrlParser: true ,useUnifiedTopology: true });

const db = mongoose.connection
db.on('error', (error)=>console.log(error));
db.once('open',()=> console.log("you are on "));