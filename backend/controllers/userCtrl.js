const Users = require('../models/userModel')
const bcrypt = require('bcrypt')

function validateEmail(email)
{
let mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(email.match(mailformat)){
        console.log("Valid Email");    
        return true;
    }
    else{
        console.log("Invalid Email");    
        return false;
    }
}

const userCtrl = {
    register: async (req, res) =>{
        try {
            const {name, username, email, password, role} = req.body;

            if(!validateEmail(email)) {
                return res.status(400).json({Error: "Invalid email address."})
            }
            else{
                const user = await Users.findOne({email})
                if(user) {
                    return res.status(400).json({Error: "This email is already beeing used."})
                }
            }

            if(password.length < 8) {
                return res.status(400).json({Error: "Password must be at least 8 characters long."})
            }

            // Password Encryption
            const passwordHash = await bcrypt.hash(password, 10)
            const newUser = new Users({
                name, username, email, password: passwordHash, role
            })
            
            res.json(newUser)
            // res.json({password, passwordHash})
            // res.json({msg: "Registration successful"})

        } catch (err) {
            return res.status(500).jsom({msg: err.message})
        }
    }
}

module.exports = userCtrl