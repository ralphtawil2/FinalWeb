const router = require("express").Router();
const productCtrl = require("../controllers/productCtrl");
const auth = require("../middleware/auth");
const authAdmin = require("../middleware/authAdmin");

router
  .route("/products") // These functions don't need the product id
  //.get(productCtrl.getProduct) // get 1 product
  .get(productCtrl.getProducts) // get all products
  .post(auth, authAdmin, productCtrl.createProduct); // create a new product (only admins)

router
  .route("/products/:id") // These functions need the product id
  .delete(auth, authAdmin, productCtrl.deleteProduct) // delete product (only admins)
  .put(auth, authAdmin, productCtrl.updateProduct); // update product (only admins)

module.exports = router;
