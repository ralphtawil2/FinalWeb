const express =require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 3001;

const UserModel = require('./UserData');
app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri,{useNewUrlParser: true });
const connection=mongoose.connection;

app.post('/', async(req, res) => {
    const name= req.body.name;
    const username= req.body.username;
    const email= req.body.email;
    const password= req.body.password;
    const user=new UserModel({name:name,username:username,email:email,password:password});
    

    /*const user = new UserModel({name:'ralph',username:'ralphtawil2',email:'email',password:'password'});*/
    try {
        await user.save();
        res.send('inserted data')
    }catch(err){
        console.log(err);
    }
});

connection.once('open',() => {
    console.log("MongoDB database connection established successfully");
})

app.listen(port,() => {
    console.log('Server is running on port :', port);
})