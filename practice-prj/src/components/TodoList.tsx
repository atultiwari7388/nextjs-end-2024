import { useState } from "react";

interface TodoInterface {
  id: number;
  task: string;
  completed: boolean;
}

export const TodoList = () => {
  const [todos, setTodos] = useState<TodoInterface[]>([]);

  function addTodo(task: string) {
    const newTodo: TodoInterface = {
      id: todos.length + 1,
      task,
      completed: false,
    };

    setTodos((prevTodos) => [...prevTodos, newTodo]);
  }

  return (
    <div>
      <h2>Todo List</h2>
      <button onClick={() => addTodo("New Todo")}>Add todo</button>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.task} {todo.completed ? "(completed)" : ""}
          </li>
        ))}
      </ul>
    </div>
  );
};
