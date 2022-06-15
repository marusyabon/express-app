var express = require('express');
var router = express.Router();

const usersService = require('../services/user.service');

router.get('/', async (req, res, next) => {
  const users = await usersService.getAll();
  res.json(users);
});

router.get('/:id', async (req, res, next) => {
  const user = await usersService.getOneById(req.params.id);
  res.json(user);
});

module.exports = router;
