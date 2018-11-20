const router = require('express').Router();
const { Coffee } = require('../models');

// Your code here!
// Remember that these routes are already mounted on
// /api/coffee!

router.get('/', async (req, res, next) => {
  try {
    res.status(200).send(await Coffee.findAll());
  } catch (error) {
    next(error);
  }
});

router.get('/:coffeeId', async (req, res, next) => {
  try {
    const coffeeId = req.params.coffeeId;
    const requestedCoffee = await Coffee.findById(coffeeId);

    if (!requestedCoffee) {
      let err = new Error();
      err.status = 404;
      throw err;
    } else {
      res.status(200).send(requestedCoffee);
    }
  } catch (error) {
    next(error);
  }
});

router.get('/ingredients/:ingredientName', async (req, res, next) => {
  try {
    const ingredientName = req.params.ingredientName;
    res.status(200).send(await Coffee.findByIngredient(ingredientName));
  } catch (error) {
    next(error);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const newCoffee = await Coffee.create(req.body);
    res.status(201).send(newCoffee);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
