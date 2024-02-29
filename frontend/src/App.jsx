import React, { useState, useEffect } from "react";
import "./App.css";
import { CreateTodo } from "./components/CreateTodo";
import { Todos } from "./components/Todos";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/todo");
        const data = await response.json();
        setTodos(data.todos);
      } catch (error) {
        console.error("Error fetching todos:", error);
      }
    };

    fetchData();
  }, [todos]);

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="max-w-lg w-full bg-white rounded-lg shadow-md p-8">
        <h1 className="text-3xl font-semibold text-center mb-8">Todo App</h1>
        <div className="mb-8">
          <CreateTodo />
        </div>
        {todos.length > 0 && (
          <div>
            <Todos todos={todos} setTodos={setTodos} />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
