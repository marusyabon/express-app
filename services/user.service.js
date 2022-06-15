const User = require('../models/User');

const getAll = async () => User.query();

const getOneById = async id => {
  return User.query().findById(id)
};

module.exports = { getAll, getOneById };