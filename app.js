const createError = require('http-errors');
const express = require('express');
const http = require('http');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const socketio = require('socket.io');

require("dotenv").config();

const { Model } = require('objection');
const knexConnection = require('./db/db')
Model.knex(knexConnection)

const auth = require('./middlewares/auth');
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const articlesRouter = require('./routes/articles');
const listenEvents = require('./socket');

const PORT = 3000;
const app = express();

const corsOptions = {
  origin: 'http://localhost:3000',
}

app.use(cors(corsOptions))
app.use(express.static('public'))

const server = http.createServer(app)
const io = socketio(server);

io.on('connection', listenEvents);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/articles', auth, articlesRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.json({ error: err })});

server.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
});
