const mongoose = require('mongoose');

const constants = require('./constants');
mongoose.Promise = global.Promise;

// If debug run the mongoose debug options
mongoose.set('debug', process.env.MONGOOSE_DEBUG);
mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);
mongoose.set('useFindAndModify', false);
try {
  console.log("🚀 ~ file: database.js ~ line 13 ~ constants.MONGO_URL", constants.MONGO_URL)
  mongoose.connect(constants.MONGO_URL);
} catch (err) {
  mongoose.createConnection(constants.MONGO_URL);
}
mongoose.connection
  .once('open', () => console.log('MongoDB Running'))
  .on('error', e => {
    console.log(e)
    throw e;
  }); 
