const express = require('express');
const PORT = 5000;
const User = require('./database/models').user;
const Order = require('./database/models').order;
const Product = require('./database/models').product;
const OrderProduct = require('./database/models').orderProduct;
const app = express();

app.get('/', async (req, res, next) => {
  try {
    const allOrders = await Order.findAll({
      include: [
        { model: Product, through: { attributes: ['quantity'] } },
        { model: User, as: 'buyer' },
        { model: User, as: 'seller' },
      ],
    });
    res.send(allOrders);
  } catch (error) {
    console.log('ERROR:', error);
    next(error);
  }
});

app.listen(PORT, () => console.log(`Listining on port: ${PORT}`));
