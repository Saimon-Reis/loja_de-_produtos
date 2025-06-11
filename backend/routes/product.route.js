import express from "express";
import { createProducts, deleteproducts, getProducts, updateProducts } from "../controllers/product.controller.js";
const router = express.Router();

router.get("/", getProducts);
router.post("/", createProducts);
router.put("/:id", updateProducts);
router.delete("/:id", deleteproducts);

export default router;