const express = require('express');
const app = express();
const products = require('./data/products');

app.get('/', (req, res, next) => {
  res.send('Hello');
});

app.get('/api/products', (req, res, next) => {
  res.json(products);
});

app.get('/api/products/:id', (req, res, next) => {
  const product = products.find((p) => p._id === req.params.id);
  res.json(product);
});

app.listen(5000, () => {
  console.log('Server running');
});
