import { Router } from "express";
import {
    findProducts,
    saveProduct,
} from "../controllers/productController.js"
import { Product } from "../data/products.js";

const productRoutes = Router();

productRoutes.get("/", findProducts)
productRoutes.post("/", saveProduct)