const router = require('express').Router()
const cloudinary = require('cloudinary')
const auth = require('../middleware/auth')
const authAdmin = require('../middleware/authAdmin')
const fs = require('fs')

// After uploading an image, a temporary file will be created. This function deletes the temporary files.
const removeTmpFiles = (path) =>{
    fs.unlink(path, err =>{
        if(err) throw err;
    })
}

// We will upload images to cloudinary instead of having them our personal machine
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET
})

// Upload Image (only administrators can upload images)
router.post('/upload', auth, authAdmin, (req, res) =>{
    try {
        console.log(req.files)
        if(!req.files || Object.keys(req.files).length === 0) return res.status(400).json({Error: 'No files were uploaded.'})

        const file = req.files.file;

        if(file.size > 1024*1024) { // If file is too large, error
            removeTmpFiles(file.tempFilePath)
            return res.status(400).json({Error: 'File too large to upload. Mexsize = 1 MB'})// 1024*1024 = 1MB, if file size > 1MB.
        }    

        if(file.mimetype !== 'image/jpeg' && file.mimetype !== 'image/jpg' && file.mimetype !== 'image/png') { // If file is not .png, jpeg or jpg, error.
            removeTmpFiles(file.tempFilePath)
            return res.status(400).json({Error: 'Incorrect file format. File type must be .jpeg, .jpg or .png'})
        } 

        cloudinary.v2.uploader.upload(file.tempFilePath, {folder: 'test'}, async(err, result) =>{ // Else, if file correct size and type, upload file.
            if(err) { // If an error happens, throw the error.
                throw err;
            } 

            removeTmpFiles(file.tempFilePath) // If no errors, upload, remove tmp files and show file id and file url.
            res.json({public_id: result.public_id, url: result.secure_url})
        })
    } 
    catch (err) {
        return res.status(500).json({msg: err.message})
    }
})

// Delete Image (only administrators can delete images)
router.post('/destroy', auth, authAdmin, (req, res) =>{
    try {
        const {public_id} = req.body;
        if(!public_id) {
            return res.status(400).json({Error: 'No images selected.'})
        }

        cloudinary.v2.uploader.destroy(public_id, async (err, result) =>{
            if(err) throw err;

            res.json({msg: 'Image deleted.'})
        })
    }
    catch (err) {
        return res.status(500).json({msg: err.message})
    }
})

module.exports = router
