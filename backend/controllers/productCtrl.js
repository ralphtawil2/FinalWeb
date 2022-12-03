const Products=require('../models/productModel')

const productCtrl={
    getProduct:async(req,res)=>{
        try {
            const products = await Products.find()
            res.json(products)
        }catch(err) {console.log(err);}
    },
    createProduct:async(req,res)=>{
        try {
            const {product_id,title,price,description,content, images , category}=req.body     ;
            if (!images) return res.status(400).json({msg:"No images found"})
            const product = await Products.findOne({product_id})
            if (product) return res.status(400).json({msg:"This product already exists"})
            const newProduct =new Products({
                product_id,title:title.toLowerCase(),price,description,content,images,category
            })
            await newProduct.save()
            res.json(newProduct)
        }catch(err) {console.log('created');}
    },
    deleteProduct:async(req,res)=>{
        try {
            await Products.findByIdAndDelete()
            res.json({msg:'deleted'})
        }catch(err) {console.log(err);}
    },
    updateProduct:async(req,res)=>{
        try {
            const {title,price,description,content, images , category}=req.body
            if(!images) return res.status(400).json({msg:"no image found"})
            await Products.findOneAndUpdate({_id:req.params.id},{
                title:title.toLowerCase,price,description,content, images , category
            })
            res.json({msg:"updated a product"})
        }catch(err) {console.log(err);}
    },


}

module.exports=productCtrl