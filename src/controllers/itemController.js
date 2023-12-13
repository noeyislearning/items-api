import Product from "../models/Product.js";

/**
 * Retrieve all items
 * @param {*} req 
 * @param {*} res 
 * @description This is a GET request to /api/v1/items
 */
export const getAllItems = async (req, res) => {
  try {
    const items = await Product.find();
    if (items.length === 0) {
      return res.status(404).json({ message: "No items found" });
    }
    res.json(items);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


/**
 * Retrieve a single item by ID
 * @param {*} req 
 * @param {*} res 
 * @description This is a GET request to /api/v1/item/:id
 */
export const getItemById = async (req, res) => {
  const itemId = req.params.id;
  try {
    const item = await Product.findById(itemId);
    if (!item) {
      return res.status(404).json({ message: "Item not found" });
    }
    res.json(item);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


/**
 * Create a new item
 * @param {*} req 
 * @param {*} res 
 * @description This is a POST request to /api/v1/items
 */
export const createItem = async (req, res) => {
  const { name, price, quantity } = req.body;
  const newItem = new Product({ name, price, quantity });

  try {
    const savedItem = await newItem.save();
    res.status(201).json({ message: "Added successfully!", item: savedItem });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};


/**
 * Update an existing item by ID
 * @param {*} req 
 * @param {*} res 
 * @description This is a PUT request to /api/v1/item/:id
 */
export const updateItem = async (req, res) => {
  const { name, price, quantity } = req.body;
  try {
    const item = await Product.findById(req.params.id);
    if (!item) {
      return res.status(404).json({ message: "Item not found" });
    }
    if (name) item.name = name;
    if (price) item.price = price;
    if (quantity) item.quantity = quantity;

    const updatedItem = await item.save();
    res.json({ message: "Updated successfully!", item: updatedItem });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};


/**
 * Delete an item by ID
 * @param {*} req 
 * @param {*} res 
 * @description This is a DELETE request to /api/v1/item/:id
 */
export const deleteItem = async (req, res) => {
  try {
    const item = await Product.findById(req.params.id);
    if (!item) {
      return res.status(404).json({ message: "Item not found" });
    }
    await Product.deleteOne({ _id: req.params.id });
    res.json({ message: "Deleted successfully!" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


