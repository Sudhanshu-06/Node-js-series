const { default: mongoose } = require("mongoose");
const Mongoose = require("mongoose");

const mongoURL = 'mongodb://localhost:27017/hotels'

mongoose.connect(mongoURL,{
    useNewUrlParser:true,
    UseUnifiedTopology:true
})

const db = mongoose.connection;

db.on('connected',() =>{
    console.log('Connected to Mongodb Server');
});
db.on('error', (err) =>{
    console.error("connection error;", error);
});
db.on('disconnected',() =>{
    console.log('Mongodb disconnected');
});

module.exports = db;