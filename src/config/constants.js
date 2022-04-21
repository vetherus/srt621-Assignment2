require("dotenv").config();

const devConfig = {
  MONGO_URL: process.env.MONGO_DEV
};

function envConfig() {
    return devConfig
}

module.exports = {
  ...envConfig(),
};
