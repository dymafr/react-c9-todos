import { createContext, useContext } from "react";

export const TodoStateContext = createContext(null);
export const TodoDispatcherContext = createContext(null);

export const useTodos = () => useContext(TodoStateContext);
export const useTodoDispatcher = () => useContext(TodoDispatcherContext);
