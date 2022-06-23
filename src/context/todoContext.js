import { createContext, useContext } from "react";

export const todoStateContext = createContext(null);
export const todoDispatcherContext = createContext(null);

export const useTodos = () => useContext(todoStateContext);
export const useTodoDispatcher = () => useContext(todoDispatcherContext);
