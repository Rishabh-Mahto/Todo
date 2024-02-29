export function Todos({ todos, setTodos }) {
  const handleToggleCompleted = async (id) => {
    const updatedTodo = todos.find((todo) => todo._id === id);

    const response = await fetch(`http://localhost:3000/todo`, {
      method: "PUT",
      body: JSON.stringify({
        id: id,
        completed: true,
      }),
      headers: {
        "Content-type": "application/json",
      },
    });
  };

  const handleDeleteTodo = async (id) => {
    const deleteTodo = todos.find((todo) => todo._id === id);

    const response = await fetch(`http://localhost:3000/todo`, {
      method: "DELETE",
      body: JSON.stringify({
        id: id,
      }),
      headers: {
        "Content-type": "application/json",
      },
    });
  };

  return (
    <div className="">
      <div className="">
        {todos.map(function (todo) {
          return (
            <div
              key={todo._id}
              className="mb-4 border bg-slate-100 rounded-md p-4 flex flex-col justify-between hover:shadow-lg"
            >
              <div>
                <h1 className="text-lg font-semibold mb-2">{todo.title}</h1>
                <p className="text-gray-700 mb-2">{todo.description}</p>
              </div>
              <div className="flex items-center justify-between">
                <button
                  className={`px-3 py-2 rounded text-xs ${
                    todo.completed
                      ? "bg-green-500 hover:bg-green-600 text-white"
                      : "bg-blue-500 hover:bg-blue-600 text-white"
                  }`}
                  onClick={() => handleToggleCompleted(todo._id)}
                >
                  {todo.completed ? "Completed" : "Mark as Completed"}
                </button>
                <button
                  className="px-3 py-2 rounded bg-red-500 hover:bg-red-600 text-white text-xs"
                  onClick={() => handleDeleteTodo(todo._id)}
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
