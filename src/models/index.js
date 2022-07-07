const config = require("../config")
const mongoose = require('mongoose');
mongoose.connect(config.DB_URL);

const User = require("./user.model")

module.exports = {
    User
}
