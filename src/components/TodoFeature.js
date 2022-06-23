import { useTodoDispatcher, useTodos } from "../context/todoContext";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";

export function TodoFeature() {
  const dispatch = useTodoDispatcher();
  const state = useTodos();

  function handleChange(e) {
    dispatch({
      type: "SET_THEME",
      theme: e.target.value,
    });
  }

  return (
    <div className="d-flex flex-row justify-content-center align-items-center p-20">
      <div className="card container p-20">
        <h1 className="mb-20 d-flex flex-row justify-content-center align-items-center">
          <span className="flex-fill">Todo list</span>
          <select value={state.theme} onChange={handleChange}>
            <option value="primary">Rouge</option>
            <option value="secondary">Bleu</option>
          </select>
        </h1>
        <AddTodo />
        <TodoList />
      </div>
    </div>
  );
}
