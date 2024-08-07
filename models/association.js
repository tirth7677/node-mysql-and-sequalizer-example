module.exports = (db) => {
    db.products.hasMany(db.reviews, { foreignKey: 'product_id', as: "reviews" });
    db.reviews.belongsTo(db.products, { foreignKey: 'product_id', as: "product" });
};