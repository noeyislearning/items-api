import express from "express";
import {
  getAllItems,
  getItemById,
  createItem,
  updateItem,
  deleteItem,
} from "../controllers/itemController.js";

const router = express.Router();

// GET all items
router.get("/items", getAllItems);

// GET a single item by ID
router.get("/item/:id", getItemById);

// POST a new item
router.post("/items", createItem);

// PUT update an existing item by ID
router.put("/item/:id", updateItem);

// DELETE an item by ID
router.delete("/item/:id", deleteItem);

export default router;
