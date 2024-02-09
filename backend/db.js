const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://Rishabh:<password>@cluster0.49rl9vy.mongodb.net/?retryWrites=true&w=majority"
);
const todoSchema = mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
});

const todo = mongoose.model("todos", todoSchema);

module.exports = {
  todo,
};
