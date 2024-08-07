const express = require('express');
const app = express();
const productrouter = require('./routes/productrouter.js');
const reviewrouter = require('./routes/reviewrouter.js');
const port = 8080;

const db = require('./models');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/products', productrouter);
app.use('/api/reviews', reviewrouter);

app.get('/', (req, res) => {
    res.json({ message: 'Welcome to the application.' });
});

db.sequelize.sync().then(() => {
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
}).catch(err => {
    console.error('Unable to connect to the database:', err);
});
