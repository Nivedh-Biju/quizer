const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
const user = require('./models/user');
const test = require('./models/test');
const cors = require('cors');


const mongoDB = "mongodb://127.0.0.1/my_database";
app.use(cors());
app.use(express.json());

// Wait for database to connect, logging an error if there is a problem
main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect(mongoDB);
}


app.use(bodyParser.json());


// Change this to handle POST requests
app.post("/api/login_attempt", async (req, res) => {
  const { name, passwd } = req.body;
  console.log(`Received login attempt - Username: ${name}, Password: ${passwd}`);


  const query = await user.findOne({ user_name: name });

  if(!query){
    res.json({ result: false});
  }
  else if(query.pass_word==passwd){
    console.log("sucess");
    res.json({ result: true});
  }
  else{
    console.log("NOPE");
    res.json({ result: false});
  }
  // Perform authentication logic here, e.g., check credentials against a database

  // Respond with success or failure
});



app.post("/api/register_attempt", async (req, res) => {
  const { username, passwd } = req.body;
  console.log(`Received registration attempt - Username: ${username}, Password: ${passwd}`);

  try {
    // Perform authentication logic here, e.g., check if the user already exists in the database

    // Check if the user already exists
    const existingUser = await user.findOne({ user_name: username });

    if (existingUser) {
      return res.status(400).json({ success: false, message: 'User already exists' });
    }

    // Create a new user
    const newUser = new user({ user_name: username, pass_word: passwd });
    
    // Save the new user to the database
    await newUser.save();

    // Respond with success
    res.status(201).json({ success: true, message: 'Registration successful' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
});

app.post("/api/make_test_attempt", async (req, res) => {
 
  const {test_name,duration,user_name} = req.body;
  try{
    const existingTest = await test.findOne({name:test_name});

    if(existingTest){
      return res.status(400).json({result : false, message : 'test already exists'});
    }

    const newTest = new test({name : test_name, author: user_name, duration: duration});

    await newTest.save();

    res.status(201).json({result: true, message: "test created"});

    console.log(newTest);

     
  }catch(error){
    console.error(error);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
});

app.post("/api/add_question", async (req, res) => {
  console.log("hello");
  console.log(req.body);
  const {
    selectedOption,
    optionA,
    optionB,
    optionC,
    optionD,
    question,
    name,
  } = req.body;

  try {
    console.log(name);
    const reqTest = await test.findOne({ name: name });
    console.log(reqTest);
    if (!reqTest) {
      return res.status(404).json({ success: false, message: 'Test not found' });
    }

    const newQuestion = {
      question: question,
      option_a: optionA,
      option_b: optionB,
      option_c: optionC,
      option_d: optionD,
      correct_option: selectedOption,
    };

    reqTest.questions.push(newQuestion);
    console.log(newQuestion);
    await reqTest.save();
    console.log("hi");
    console.log(reqTest);
    res.status(200).json({ message: 'Question created successfully', test: reqTest });

    console.log(reqTest);
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
});

app.get("/api/test_options", async (req,res) => {
  const tests= await test.find();
  res.json(tests);
  console.log(tests);
});

app.get("/api/get_test", async (req,res) =>{
  const{test_name} = req.query;
  console.log(test_name);
  const test1 = await test.findOne({name : test_name});
  res.json(test1);
  console.log("test request");
  console.log(test1);
  console.log("request sent");
});

app.post("/api/update_score", async (req, res) => {
  const { user_name, test_name, score } = req.body;
  try {
    const updateuser = await user.findOne({ user_name: user_name });

    if (!updateuser) {
      // Handle the case when the user is not found
      return res.status(404).json({ error: "User not found" });
    }

    const newtest = {
      test_name: test_name,
      score: score,
    };

    updateuser.tests.push(newtest);
    await updateuser.save();
    console.log(updateuser);
    res.status(200).json(updateuser); // Optional: Send a response if needed
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/api/get_user", async (req,res) => {
  const {user_name} = req.query;
  const requser= await user.findOne({user_name : user_name});
  res.json(requser);
  console.log("got request for user");
});


app.listen(3001, () => console.log("Server started on port 3001"));


