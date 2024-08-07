const db = require('../models');
const Product = db.products;
const Review = db.reviews;

const addproduct = async (req, res) => {
    try {
        const info = {
            title: req.body.title,
            price: req.body.price,
            description: req.body.description,
            published: req.body.published ? req.body.published : false
        };
        const product = await Product.create(info);
        res.status(200).json({
            status: "success",
            data: product
        });
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
};

const getallproducts = async (req, res) => {
    try {
        const products = await Product.findAll({ include: [{ model: Review, as: 'reviews' }] });
        res.status(200).json({
            status: "success",
            data: products
        });
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
};

const getsingleproduct = async (req, res) => {
    try {
        const id = req.params.id;
        const product = await Product.findOne({
            where: { id: id },
            include: [{ model: Review, as: 'reviews' }]
        });
        res.status(200).json({
            status: "success",
            data: product
        });
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
};

const updateproduct = async (req, res) => {
    try {
        const id = req.params.id;
        const info = {
            title: req.body.title,
            price: req.body.price,
            description: req.body.description,
            published: req.body.published ? req.body.published : false
        };
        const product = await Product.update(info, { where: { id: id } });
        res.status(200).json({
            status: "success",
            data: product
        });
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
};

const deleteproduct = async (req, res) => {
    try {
        const id = req.params.id;
        const product = await Product.destroy({ where: { id: id } });
        res.status(200).json({
            status: "success",
            data: product
        });
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
};

const getpublishedproducts = async (req, res) => {
    try {
        const products = await Product.findAll({ where: { published: true }, include: [{ model: Review, as: 'reviews' }] });
        res.status(200).json({
            status: "success",
            data: products
        });
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
};

module.exports = {
    addproduct,
    getallproducts,
    getsingleproduct,
    updateproduct,
    deleteproduct,
    getpublishedproducts,
};
