import { Product } from "../data/products.js"

export async function getFilteredProducts(category, provider, sortBy, order) {
    let query = {};

    if (category !== undefined) {
        query.category = category;
    }

    if (provider !== undefined) {
        query.supplier = provider;
    }

    let mongooseQuery = Product.find(query);
    if (sortBy !== undefined && order !== undefined) {
        const sortOrder = order === "asc" ? 1 : -1;
        mongooseQuery = mongooseQuery.sort({ [sortBy]: sortOrder })
    }
    return await mongooseQuery;
}

export async function createProduct(productData) {
    return await Product.create(productData);
}

export async function getProduct(id) {
    return await Product.findById(id);
}

export async function updateProductById(id, udpateData) {
    return await Product.findByIdAndUpdate(id, udpateData, { new: true, runValidators: true })
}

export async function deleteProductById(id) {
    return await Product.findByIdAndDelete(id);
}