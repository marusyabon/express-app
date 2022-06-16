const jwt = require('jsonwebtoken');

const { checkPassword } = require('../helpers/password');
const User = require('../models/User');

const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;

const signToken = async (email, password) => {
  const user = await User.query().where('email', email);

  if (!user) {
    return null;
  }
  const hashedPassword = user.password;
  const compareRes = await checkPassword(password, hashedPassword);

  if (compareRes) {
    const { id, login } = user;
    const token = jwt.sign({ id, login }, JWT_SECRET_KEY, { expiresIn: '24h' });
    return { token };
  }

  return null;
};

module.exports = {
  signToken
};