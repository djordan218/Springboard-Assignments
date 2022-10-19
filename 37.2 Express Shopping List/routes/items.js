const Item = require('../item');
const express = require('express');

const router = express.Router();

router.get('', (req, res, next) => {
  try {
    return res.json({ items: Item.findAll() });
  } catch (err) {
    return next(err);
  }
});

router.post('', (req, res, next) => {
  try {
    let newItem = new Item(req.body.name, req.body.price);
    return res.json({ item: newItem });
  } catch (err) {
    return next(err);
  }
});

router.get('/:name', (req, res, next) => {
  try {
    let foundItem = Item.find(req.params.name);
    return res.json({ item: foundItem });
  } catch (err) {
    return next(err);
  }
});

router.patch('/:name', (req, res, next) => {
  try {
    let foundItem = Item.update(req.params.name, req.body);
    return res.json({ item: foundItem });
  } catch (err) {
    return next(err);
  }
});

router.delete('/:name', (req, res, next) => {
  try {
    Item.remove(req.params.name);
    return res.json({ message: 'Deleted' });
  } catch (err) {
    return next(err);
  }
});

module.exports = router;

// const express = require('express');
// const router = new express.Router();
// const ExpressError = require('../expressError');
// const items = require('../fakeDb');

// router.get('/', function (req, res) {
//   res.json({ items });
// });

// router.post('/', function (req, res) {
//   const newItem = { name: req.body.name, price: req.body.price };
//   items.push(newItem);
//   res.status(201).json({ added: newItem });
// });

// router.get('/:name', function (req, res) {
//   const foundItem = items.find((item) => item.name === req.params.name);
//   if (foundItem === undefined) {
//     throw new ExpressError('Item not found', 404);
//   }
//   res.json({ item: foundItem });
// });

// router.patch('/:name', function (req, res) {
//   const foundItem = items.find((i) => i.name === req.params.name);
//   if (foundItem === undefined) {
//     throw new ExpressError('Item not found', 404);
//   }
//   foundItem.name = req.body.name;
//   foundItem.price = req.body.price;
//   res.json({ updated: foundItem });
// });

// router.delete('/:name', function (req, res) {
//   const foundItem = items.findIndex((i) => i.name === req.params.name);
//   if (foundItem === -1) {
//     throw new ExpressError('Item not found', 404);
//   }
//   items.splice(foundItem, 1);
//   res.json({ message: 'Deleted' });
// });

// module.exports = router;
