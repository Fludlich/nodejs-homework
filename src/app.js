const express = require('express')
const logger = require('morgan');
const cors = require('cors');
require('dotenv').config()

const {postRouter} = require('./routes/api/contacts');
const {authRouter} = require('./routes/api/authRouter');
<<<<<<< Updated upstream
//const {avatarRouter} = require('./routes/api/avatarRouter');

const app = express();
app.use(express.static("public"))
=======

const app = express();
app.use(express.static('public'));
>>>>>>> Stashed changes

const formatLogger = app.get('env') === 'development' ? 'dev' : 'short';

app.use(logger(formatLogger));
app.use(cors());
app.use(express.json());

app.use('/api/contacts', postRouter)
app.use('/api/users', authRouter)
<<<<<<< Updated upstream
//app.use('/api/avatars', avatarRouter)
=======

>>>>>>> Stashed changes

app.use(( request, response ) =>{
  response.status(404).json({message: 'Not found'})
});

app.use((error, request, response, next) =>{
  const {status = 500, message = 'Server error'} = error
  response.status(status).json({message})
});

module.exports = app;
