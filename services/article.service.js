const Article = require('../models/Article');

const getAll = async () => Article.query();

const getOneById = async id => {
  return Article.query().findById(id)
};

module.exports = { getAll, getOneById };