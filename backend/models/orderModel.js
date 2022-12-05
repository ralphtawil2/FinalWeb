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
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> a7216c4 (Created getAllUsers function)
=======
>>>>>>> aece823 (Created getAllUsers function)
    address: {
      type: Object,
      equired: true,
    },
    status: {
      type: String,
      default: "pending",
    },
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> d7bad6e (Made minor changes.)
=======
>>>>>>> a7216c4 (Created getAllUsers function)
=======
>>>>>>> f197a1e (Made minor changes.)
=======
>>>>>>> aece823 (Created getAllUsers function)
  },
  {
    timestamps: true,
  }
);

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
module.exports = mongoose.model("orders", OrderSchema);
=======
module.exports =mongoose.model("orders", OrderSchema)
>>>>>>> d7bad6e (Made minor changes.)
=======
module.exports = mongoose.model("orders", OrderSchema);
>>>>>>> a7216c4 (Created getAllUsers function)
=======
module.exports =mongoose.model("orders", OrderSchema)
>>>>>>> f197a1e (Made minor changes.)
=======
module.exports = mongoose.model("orders", OrderSchema);
>>>>>>> aece823 (Created getAllUsers function)
