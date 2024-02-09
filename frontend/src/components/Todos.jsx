export function Todos(props) {
  const todos = props.todos;
  return (
    <div>
      <h1>Do coding</h1>
      <h2>Friday h.... Complete the project</h2>
      <button>Mark as Completed</button>
      {todos.map(function (todo) {
        return (
          <div>
            <h1>{todo.title}</h1>
            <h2>{todo.description}</h2>
            <button>
              {todo.completed == true ? "Completed" : "Mark as Completed"}
            </button>
          </div>
        );
      })}
    </div>
  );
}
