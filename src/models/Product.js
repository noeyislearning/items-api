import mongoose from "mongoose";

const itemSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: [true, "Please enter a product name"]
  },
  price: { 
    type: Number, 
    required: true 
  },
  quantity: {
    type: Number,
    required: true,
    min: [0, "Quantity can not be less than 0."],
  }
}, {timestamps: true});

const Item = mongoose.model("Item", itemSchema);

export default Item;