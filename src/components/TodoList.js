import TodoItem from "./TodoItem";
import EditTodo from "./EditTodo";
import { useTodos } from "../context/todoContext";

function TodoList() {
  const state = useTodos();
  return state.todoList.length ? (
    <ul>
      {state.todoList.map((todo) =>
        todo.edit ? (
          <EditTodo key={todo.id} todo={todo} />
        ) : (
          <TodoItem key={todo.id} todo={todo} />
        )
      )}
    </ul>
  ) : (
    <p>Aucune todo pour le moment</p>
  );
}

export default TodoList;
