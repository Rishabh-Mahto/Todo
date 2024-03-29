const express = require("express");
const { createTodo, updateTodo, deleteTodo } = require("./types");
const { todo } = require("./db");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

//create todo item

app.post("/todo", async function (req, res) {
  const createPayload = req.body;
  const parsedPayload = createTodo.safeParse(createPayload);
  if (!parsedPayload.success) {
    res.status(411).json({
      msg: "You have sent the wrong Inputs",
    });
    return;
  }
  //put it in mongoDb
  await todo.create({
    title: createPayload.title,
    description: createPayload.description,
    completed: false,
  });
  res.json({
    msg: "Todo Created",
  });
});

app.get("/todo", async function (req, res) {
  const todos = await todo.find({});

  res.json({
    todos,
  });
});

//update todo item
app.put("/todo", async function (req, res) {
  const updatePayload = req.body;
  const parsedPayload = updateTodo.safeParse(updatePayload);
  if (!parsedPayload.success) {
    res.status(411).json({
      msg: "You have sent the wrong inputs",
    });
    return;
  }
  await todo.updateOne(
    {
      _id: req.body.id,
    },
    {
      completed: true,
    }
  );

  res.json({
    msg: "Todo marked as compelted",
  });
});

//Delete todo
app.delete("/todo", async (req, res) => {
  const deletePayload = req.body;
  const parsedPayload = deleteTodo.safeParse(deletePayload);
  if (!parsedPayload.success) {
    res.status(411).json({
      msg: "You have sent the wrong inputs",
    });
    return;
  }
  await todo.deleteOne({
    _id: req.body.id,
  });

  res.json({
    msg: "Todo deleted successfully",
  });
});

app.listen(3000);
