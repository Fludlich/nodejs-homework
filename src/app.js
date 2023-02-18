const express = require('express')
const logger = require('morgan');
const cors = require('cors');
require('dotenv').config()

const {postRouter} = require('./routes/api/contacts');
const {authRouter} = require('./routes/api/authRouter');
const {avatarRouter} = require('./routes/api/avatarRouter');

const app = express();

const formatLogger = app.get('env') === 'development' ? 'dev' : 'short';

app.use(logger(formatLogger));
app.use(cors());
app.use(express.json());

app.use('/api/contacts', postRouter)
app.use('/api/users', authRouter)
app.use('/api/avatars', avatarRouter)

app.use(( request, response ) =>{
  response.status(404).json({message: 'Not found'})
});

app.use((error, request, response, next) =>{
  const {status = 500, message = 'Server error'} = error
  response.status(status).json({message})
});

module.exports = app;
