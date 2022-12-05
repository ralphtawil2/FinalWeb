const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    products: [
      {
        productId: {
          type: String,
        },
        quantity: {
          type: Number,
          default: 1,
        },
      },
    ],
    amount: {
      type: Number,
      required: true,
    },
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> a7216c4 (Created getAllUsers function)
    address: {
      type: Object,
      equired: true,
    },
    status: {
      type: String,
      default: "pending",
    },
<<<<<<< HEAD
=======
>>>>>>> d7bad6e (Made minor changes.)
=======
>>>>>>> a7216c4 (Created getAllUsers function)
  },
  {
    timestamps: true,
  }
);

<<<<<<< HEAD
<<<<<<< HEAD
module.exports = mongoose.model("orders", OrderSchema);
=======
module.exports =mongoose.model("orders", OrderSchema)
>>>>>>> d7bad6e (Made minor changes.)
=======
module.exports = mongoose.model("orders", OrderSchema);
>>>>>>> a7216c4 (Created getAllUsers function)
