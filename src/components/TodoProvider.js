import { useReducer } from "react";
import ThemeContext from "../context/ThemeContext";
import { TodoStateContext } from "../context/TodoContext";
import { TodoDispatcherContext } from "../context/TodoContext";
import todoReducer from "../reducers/todoReducer";

function TodoProvider({ children }) {
  const [state, dispatch] = useReducer(todoReducer, {
    theme: "primary",
    todoList: [],
  });

  return (
    <TodoStateContext.Provider value={state}>
      <TodoDispatcherContext.Provider value={dispatch}>
        <ThemeContext.Provider value={state.theme}>
          {children}
        </ThemeContext.Provider>
      </TodoDispatcherContext.Provider>
    </TodoStateContext.Provider>
  );
}

export default TodoProvider;
