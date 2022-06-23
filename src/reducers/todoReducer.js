function todoReducer(state, action) {
  switch (action.type) {
    case "ADD_TODO": {
      return {
        ...state,
        todoList: [
          ...state.todoList,
          {
            id: crypto.randomUUID(),
            content: action.content,
            edit: false,
            done: false,
            selected: false,
          },
        ],
      };
    }
    case "DELETE_TODO": {
      return {
        ...state,
        todoList: state.todoList.filter((t) => t.id !== action.id),
      };
    }
    case "TOGGLE_TODO": {
      return {
        ...state,
        todoList: state.todoList.map((t) =>
          t.id !== action.id ? t : { ...t, done: !t.done }
        ),
      };
    }
    case "TOGGLE_EDIT_TODO": {
      return {
        ...state,
        todoList: state.todoList.map((t) =>
          t.id !== action.id ? t : { ...t, edit: !t.edit }
        ),
      };
    }
    case "EDIT_TODO": {
      return {
        ...state,
        todoList: state.todoList.map((t) =>
          t.id !== action.id
            ? t
            : { ...t, content: action.content, edit: false }
        ),
      };
    }
    case "SELECT_TODO": {
      return {
        ...state,
        todoList: state.todoList.map((t) =>
          t.id !== action.id
            ? { ...t, selected: false }
            : { ...t, selected: true }
        ),
      };
    }
    case "SET_THEME": {
      return {
        ...state,
        theme: action.theme,
      };
    }
    default: {
      throw new Error("action inconnue");
    }
  }
}

export default todoReducer;
