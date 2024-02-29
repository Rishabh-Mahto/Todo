const mongoose = require("mongoose");
require("dotenv").config();

const uri = process.env.MONGODBURI;

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const todoSchema = mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
});

const todo = mongoose.model("todos", todoSchema);

module.exports = {
  todo,
};
