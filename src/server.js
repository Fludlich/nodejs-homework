const app = require('./app');
const {connectMongo} = require('./db/conection');
require('dotenv').config()
const PORT = 3001


const start = async () => {
  try {
    await connectMongo()
    app.listen(PORT, (error)=>{
      if (error) {
        console.error('Error at server launch:', error)
        console.log(`Server running at port ${PORT}`)
      };
    });
  } catch (error) {
    console.error('Error at server launch:', error)
  }
};

start()
