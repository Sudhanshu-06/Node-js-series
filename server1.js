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




app.get('/', function (req, res) {
  res.send('Welcome to Sudhanshu world ...how can i help you')
});

//POST route to add a person

// app.post('/person',async(req,res) => {

//   try{
//     const data = req.body
//     // Create a new Person document using the Mongoose model
//     const newPerson = new Person(data);
//     // Save the new person to the database
//     const response = await newPerson.save();
//     console.log('data saved');
//     res.status(200).json(response);
//   }
//   catch(err){
//     console.log(err);
//     res.status(500).json({error:'Internal Server Error'})
//   }

  
// })

// GET method to get the person

// app.get('/person',async(req,res) =>{
//   try{
//     const data = await Person.find();
//     console.log('data fetched');
//     res.status(200).json(data);

//   }catch(err){
//     console.log(err);
//     res.status(200).json({error:'Internal server Error'});

//   }
// });

// app.post('/MenuItem',async(req,res) => {

//   try{
//     const data = req.body
//     const newMenu = new MenuItem(data);
//     const response = await newMenu.save();
//     console.log('data saved');
//     res.status(200).json(data);
//   }
//   catch(err){
//     console.log(err);
//     res.status(500).json({error:'Internal Server Error'})
//   }

  
// })

// app.get('/MenuItem',async(req,res) =>{
//   try{
//     const data = await MenuItem.find();
//     console.log('data fetched');
//     res.status(200).json(data );

//   }catch(err){
//     console.log('data saved');
//     res.status(200).json({error:'Internal server Error'});

//   }
// })

// app.get('/person/:workType',async(req,res)=>{
//   try{
//     const workType = req.params.workType;
//     if(workType == 'chef' || workType =='waiter'|| workType =='manager' ){
//       const response = await Person.find({work:workType});
//       console.log('response fetched');
//       res.status(200).json(response);
//     }else{
//       res.status(404).json({error: 'Invalid work type'});
//     }

//   }catch(err){
//     console.log('data saved');
//     res.status(500).json({error:'Internal server Error'});

//   }
// })


// Import the router files
const personRoutes= require('./routes/personRoutes');
const MenuItemRoutes = require('./routes/menuItemRoutes');

// Use the routers
app.use('/person',personRoutes);
app.use('./menuItem',MenuItemRoutes)

app.listen(3000,()=>{
    console.log('listening port is 3000')
});