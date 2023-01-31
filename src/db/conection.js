const mongoose = require('mongoose');
mongoose.set('strictQuery', false);

const connectMongo = async () => {
  return mongoose.connect(process.env.MONGO_URLl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
}

module.exports = {
  connectMongo,
}
