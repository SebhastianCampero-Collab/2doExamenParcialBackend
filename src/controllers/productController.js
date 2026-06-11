import {
    getFilteredProducts,
    createProduct,
    getProduct,
    updateProductById,
    deleteProductById
} from "../services/productService.js";
import { validateProductBody } from "../utils/productValidator.js";


export async function findProducts(req, res, next) {
    const { category, provider, sortBy, order } = req.query;
    if (sortBy !== undefined && sortBy !== "price" && sortBy !== "stock") {
        const error = Error("Query param must be sortBy with price or stock")
        error.statusCode = 400;
        return next(error);
    }
    if (order !== undefined && order !== "asc" && order !== "desc") {
        const error = Error("Query param with order must be asc o desc")
        error.statusCode = 400;
        return next(error);
    }

    try {
        const products = await getFilteredProducts(category, provider, sortBy, order);
        return res.success(200, "products given succesfully")
    } catch (err) {
        return next(err);
    }
}

export async function saveProduct(req, res, next) {
    const validator = validateProductBody(req.body, true);
    if (!validator.validation) {
        const error = Error(validator.message);
        error.statusCode = 400;
        return next(error);
    }

    try {
        const newProduct = await createProduct({
            name: req.body.name,
            category: req.body.category,
            price: req.body.price,
            stock: req.body, stock,
            supplier: req.body.supplier
        })
        return res.success(201, "product created succefully")
    } catch (err) {
        return next(err);
    }

}