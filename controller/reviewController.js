const db = require('../models');
const Review = db.reviews;

const addreview = async (req, res) => {
    try {
        const info = {
            rating: req.body.rating,
            description: req.body.description,
            product_id: req.body.product_id
        };
        const review = await Review.create(info);
        res.status(200).json({
            status: "success",
            data: review
        });
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
};

const getallreviews = async (req, res) => {
    try {
        const reviews = await Review.findAll();
        res.status(200).json({
            status: "success",
            data: reviews
        });
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
};

module.exports = {
    addreview,
    getallreviews
};
