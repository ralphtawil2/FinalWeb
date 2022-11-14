const express = require("express");
/*
express is a web framework that was written with javascript 
and that is used for building the backend of a web application
*/

const cors = require("cors");
/*
CORS (cross-origin ressource sharing) is a security protocol
implemented by browsers that allow us to access ressources from 
a different origin. In our case , it will allow us to access everything 
sent to localhost:3001 while using localhost:3000 at the same time
*/

const mongoose = require("mongoose");
/*
mongoose is a library for MongoDB that manages relationships between
data . It also provides schema validation and is used to translate between
objects in code and the representation of these objects in MongoDB
*/

require("dotenv").config();
/*
this will import the .env file
*/

const app = express();
/*
this line will allow us to use all the useful predefined functions
 of express to build our backend (ex: .post(...) , .use(...), .listen(...) )
 */
const port = process.env.PORT || 3001;
/*
this line will set the port variable to 3001
*/

const UserModel = require("./UserData");
/*
this line will import the UserSchema created in UserData.js
and use it under the name of UserModel
*/

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
/*
uri will be equal to the connection string passed in .env file 
*/

mongoose.connect(uri, { useNewUrlParser: true });
const connection = mongoose.connection;
/*
setting up the connection to the database 
*/

app.post("/", async (req, res) => {
  const name = req.body.name;
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;
  const user = new UserModel({
    name: name,
    username: username,
    email: email,
    password: password,
  });

  try {
    await user.save();
    res.send("inserted data");
  } catch (err) {
    console.log(err);
  }
});
/*
handles the requests of a client and the responses and use whatever the 
client passed to create a new user object in our database 
*/

connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});
/*
will print out a message to the console once the connection is established
*/

app.listen(port, () => {
  console.log("Server is running on port :", port);
});
/*
will print out a message to the console once we are listening to the port 3001
*/
