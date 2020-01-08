const mongoose = require("mongoose");
const { Schema } = mongoose;

const serverSchema = Schema({
  name: {
    type: String,
    required: true
  },
  port: {
    type: String,
    required: true
  }
});

const ServerKeys = mongoose.model("server", serverSchema);

module.exports = ServerKeys;
