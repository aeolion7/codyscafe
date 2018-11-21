const router = require('express').Router();
const { Pug } = require('../models');

// Your code here!
// Remember that these routes are already mounted on
// /api/pugs!

router.get('/', async (req, res, next) => {
  try {
    res.status(200).send(await Pug.findAll());
  } catch (error) {
    next(error);
  }
});

router.get('/:pugId', async (req, res, next) => {
  try {
    const pugId = req.params.pugId;
    const thisPug = await Pug.findById(pugId);

    if (!thisPug) {
      res.status(404).send();
    } else {
      res.status(200).send(thisPug);
    }
  } catch (error) {
    next(error);
  }
});

router.get('/FavoriteCoffee/:favoriteCoffeeName', async (req, res, next) => {
  try {
    const favoriteCoffee = req.params.favoriteCoffeeName;
    res.status(200).send(await Pug.findByCoffee(favoriteCoffee));
  } catch (error) {
    next(error);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const newPug = await Pug.create(req.body);
    res.status(201).send(newPug);
  } catch (error) {
    next(error);
  }
});

router.put('/:pugId', async (req, res, next) => {
  try {
    const pugId = req.params.pugId;
    const thisPug = await Pug.findById(pugId);

    if (!thisPug) {
      res.status(404).send();
    } else {
      const updatedPug = await thisPug.update(req.body);
      res.status(200).send(updatedPug);
    }
  } catch (error) {
    next(error);
  }
});

router.delete('/:pugId', async (req, res, next) => {
  try {
    const pugId = req.params.pugId;
    const thisPug = await Pug.findById(pugId);

    if (!thisPug) {
      res.status(404).send();
    } else {
      await thisPug.destroy();
      res.send(204);
    }
  } catch (error) {
    next(error);
  }
});

module.exports = router;
