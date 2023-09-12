const express = require('express')
const { createProduct, upload, getProducts, productId, updateProduct, removeProduct } = require('../controllers/productCtr')
const router = express.Router()

router.post("/create_product", upload.any('image'), createProduct)

router.get("/products", getProducts)

router.get("/products/:id", productId)

router.put("/update_product/:id", updateProduct)

router.delete("/delete_product/:id", removeProduct)

module.exports = router