import { useState } from "react";

export function CreateTodo() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleAddTodo = () => {
    fetch("http://localhost:3000/todo", {
      method: "POST",
      body: JSON.stringify({
        title: title,
        description: description,
      }),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then(async function (res) {
        const json = await res.json();
        alert("Todo Added");
      })
      .catch((error) => {
        console.error("Error adding todo:", error);
        alert("Failed to add todo. Please try again.");
      });
  };

  return (
    <div className="p-4 mb-4 bg-blue-100 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-4">Create New Todo</h2>
      <div className="create-todo-form">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="mb-2 p-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
        />
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="mb-2 p-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
        />
        <button
          onClick={handleAddTodo}
          className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Add Todo
        </button>
      </div>
    </div>
  );
}
