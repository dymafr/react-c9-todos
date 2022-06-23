function TodoItem({ todo, deleteTodo, toggleTodo, editTodo, selectTodo }) {
  return (
    <li
      onClick={selectTodo}
      className={`mb-10 d-flex flex-row justify-content-center align-items-center p-10 ${
        todo.selected ? "selected" : ""
      }  `}
    >
      <span className="flex-fill mr-15">
        {todo.content} {todo.done && "( ✓ )"}{" "}
      </span>
      <button
        onClick={(e) => {
          e.stopPropagation();
          toggleTodo();
        }}
        className="btn btn-primary mr-15"
      >
        Valider
      </button>
      <button
        onClick={(e) => {
          e.stopPropagation();
          editTodo();
        }}
        className="btn btn-primary mr-15"
      >
        Modifier
      </button>
      <button
        onClick={(e) => {
          e.stopPropagation();
          deleteTodo();
        }}
        className="btn btn-reverse-primary mr-15"
      >
        Supprimer
      </button>
    </li>
  );
}

export default TodoItem;
