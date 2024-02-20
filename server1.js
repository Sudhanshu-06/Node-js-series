// const jsonString = '{"name":"John","age":30,"city":"New York"}';
// const jsonObject = JSON.parse(jsonString);
// console.log(jsonObject.name);

// const objectToConvert={
//     name:"John",
//     age:25
// }
// const json = JSON.stringify(objectToConvert);
// console.log(json);
// console.log(typeof json);


//  ----Express Server

const express = require('express')
const app = express();
const db = require('./db');

const bodyParser = require('body-parser');
app.use(bodyParser.json());

const Person = require('./models/Person');

app.get('/', function (req, res) {
  res.send('Welcome to Sudhanshu world ...how can i help you')
});

app.post('/person',(req,res) => {

  const data = req.body

  const newPerson = new Person(data);

  newPerson.save((error,savedperson) =>{
    if(error){
      console.log('Error saving person:',error);
      res.status(500).json({error: 'Internal server error'})
    }else{
      console.log('data saved successfully');
      res.status(200).json(savedpersonperson);
    }
  })
})

app.listen(3000,()=>{
    console.log('listening port is 3000')
});