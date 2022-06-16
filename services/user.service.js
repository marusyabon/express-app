const { hashPassword } = require('../helpers/password');
const User = require('../models/User');

const getAll = async () => User.query();

const getOneById = async id => {
  return User.query().findById(id).select('email', 'username')
};

const create = async user => {
  const hashedPassword = await hashPassword(user.password);

  const { id } = await User.query().insert({
    username: user.username,
    email: user.email,
    password: hashedPassword
  });

  return getOneById(id);
};

module.exports = { getAll, getOneById, create };