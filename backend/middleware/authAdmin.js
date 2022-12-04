const Users = require('../models/userModel')
const authAdmin = async (req, res, next) =>{
    try {
        // get user information by id
        const user = await Users.findOne({
            _id: req.user.id 
        })
        if(!user.isAdmin) {
            return res.status(400).json({Error: "Administrator access required."})
        }
        next()
    } 
    catch (err) {
        return res.status(500).json({msg: err.messsage})
    }
}

module.exports = authAdmin