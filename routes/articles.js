var express = require('express');
var router = express.Router();

const articlesService = require('../services/article.service');

router.get('/', async (req, res, next) => {
  const articles = await articlesService.getAll();
  res.json(articles);
});

router.get('/:id', async (req, res, next) => {
  const article = await articlesService.getOneById(req.params.id);
  res.json(article);
});

module.exports = router;
