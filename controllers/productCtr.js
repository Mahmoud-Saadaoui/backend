const express = require('express')
const multer = require('multer')
const Product = require("../models/productModel")

filename = '';

const mystorage = multer.diskStorage({
    destination: './uploads',
    filename: (req, file, redirect) => {
        let date = Date.now();
        let fl = date + '.' +file.mimetype.split('/')[1];
        redirect(null, fl);
        filename= fl;
    }
})

const upload = multer({storage: mystorage})

// @route   POST api/product/createProduct
// @desc    Create a Product
// @access  Public
const createProduct = async(req,res) => {
    try {
        data = req.body
        const newProduct = new Product(data)
        newProduct.image = filename
        savedProduct = await newProduct.save()
        filename = ''
        res.status(200).send(savedProduct)
    } catch (error) {
        res.status(400).send(error)
    }
}

// @route   GET api/product/products
// @desc    Get All Products
// @access  Public
const getProducts = async(req,res) => {
    try {
        const products = await Product.find()
        res.status(200).send(products)
    } catch (error) {
        res.status(400).send(error)
    }
}

// @route   GET api/product/products/:id
// @desc    Get Product By Id
// @access  Public
const productId = async(req, res) => {
    try {
        const my_id = req.params.id
        const product = await Product.findById(my_id)
        res.status(200).send(product)
    } catch (error) {
        res.status(400).send(error)
    }
}

// @route   PUT api/product/update_product/:id
// @desc    Update Product
// @access  Public
const updateProduct = async(req, res) => {
    try {
        const id = req.params.id
        const product = req.body
        updated = await Product.findOneAndUpdate({_id: id}, product)
        res.status(200).send(updated)
    } catch (error) {
        res.status(400).send(error)
    }
}

// @route   DELETE api/product/delete_product/:id
// @desc    Delete Product
// @access  Public
const removeProduct = async(req, res) => {
    try {
        const id = req.params.id
        deleted = await Product.findOneAndDelete({_id: id})
        res.status(200).send(deleted)
    } catch (error) {
        res.status(400).send(error)
    }
}

module.exports = {
    upload,
    createProduct,
    getProducts,
    productId,
    updateProduct,
    removeProduct
}
