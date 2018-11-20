const router = require('express').Router();
const { Coffee } = require('../models');

// Your code here!
// Remember that these routes are already mounted on
// /api/coffee!

router.get('/', async (req, res, next) => {
  res.status(200).send(await Coffee.findAll());
});

router.get('/:coffeeId', async (req, res, next) => {
  const coffeeId = req.params.coffeeId;
  const requestedCoffee = await Coffee.findById(coffeeId);

  if (!requestedCoffee) {
    res.status(404).send();
  } else {
    res.status(200).send(requestedCoffee);
  }
});

router.get('/ingredients/:ingredientName', async (req, res, next) => {
  const ingredientName = req.params.ingredientName;
  res.status(200).send(await Coffee.findByIngredient(ingredientName));
});

router.post('/', async (req, res, next) => {
  const newCoffee = await Coffee.create(req.body);

  res.status(201).send(newCoffee);
});

module.exports = router;
