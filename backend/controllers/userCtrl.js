const Users = require('../models/userModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


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
            const {name, username, email, password, isAdmin} = req.body;

            if(!validateEmail(email)) {
                return res.status(400).json({Error: "Invalid email address."})
            }
            else{
                const user = await Users.findOne({email})
                if(user) {
                    return res.status(400).json({Error: "This email is already beeing used."})
                }
            }

            const user = await Users.findOne({username})
                if(user) {
                    return res.status(400).json({Error: "This username is already beeing used."})
                }

            if(password.length < 8) {
                return res.status(400).json({Error: "Password must be at least 8 characters long."})
            }

            // Password Encryption
            const passwordHash = await bcrypt.hash(password, 10)
            const newUser = new Users({
                name, username, email, password: passwordHash, isAdmin
            })

            // Save to MongoDB
            await newUser.save()

            // Create jsonwebtoken for authentification
            const accessToken = createAccessToken({id: newUser._id}) // access token is used to get access to information, it is short lived (1day)
            const refreshToken = createRefreshToken({id: newUser._id}) // refresh token is used to get a new access token, it is long lived (7days)

            res.cookie('refreshToken', refreshToken, {
                httpOnly: true,
                path: '/user/refresh_token'
            })

            res.json({accessToken})
            // res.json({msg: "Registration successful"})
            // res.json(newUser)
            // res.json({password, passwordHash})

        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },

    login: async (req, res) =>{
        try {
            const {email, password} = req.body;

            const user = await Users.findOne({email})
            if(!user) {
                return res.status(400).json({Error: "Invalid email or password."})
            }

            const isMatch = await bcrypt.compare(password, user.password)
            if(!isMatch) {
                return res.status(400).json({Error: "Invalid email or password."})
            }

            // If login successful, create access token and refresh token
            const accessToken = createAccessToken({id: user._id}) // access token is used to get access to information, it is short lived (1day)
            const refreshToken = createRefreshToken({id: user._id}) // refresh token is used to get a new access token, it is long lived (7days)

            res.cookie('refreshToken', refreshToken, {
                httpOnly: true,
                path: '/user/refresh_token'
            })

            res.json({accessToken})

            // res.json({msg: "Login Successful"})
        }
        catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },

    logout: async (req, res) =>{
        try {
            res.clearCookie('refreshToken', {path: '/user/refresh_token'})
            return res.json({msg: "Log-out Successful."})
        }
        catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },

    refreshToken: (req, res) =>{
        try {
            const rf_token = req.cookies.refreshToken;
            if(!rf_token) {
                return res.status(400).json({Error: "Please Login or Register"})
            }

            jwt.verify(rf_token, process.env.REFRESH_TOKEN_SECRET, (err, user) =>{
                if(err) { // if refreshToken has expired or doesnt exist, ask user to login or register
                    return res.status(400).json({Error: "Please Login or Register"})
                }

                // else create an access token
                const accessToken = createAccessToken({id: user.id})

                res.json({accessToken})
            })

            // res.json({rf_token})
        }
        catch (err) {
            return res.status(500).jsom({msg: err.message})
        }
    },

    getUser: async (req, res) =>{
        try {
            const user = await Users.findById(req.user.id).select('-password')
            if(!user) return res.status(400).json({msg: "User does not exist."})

            res.json(user)
            
            //res.json(req.user) // client_id
        }
        catch (err) {
            return res.status(500).json({msg: err.message})
        }
    }
}

const createAccessToken = (user) =>{
    return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {expiresIn: '5h'})
}
const createRefreshToken = (user) =>{
    return jwt.sign(user, process.env.REFRESH_TOKEN_SECRET, {expiresIn: '2d'})
}

module.exports = userCtrl