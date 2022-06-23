import Button from "./Button";
import { useTodoDispatcher } from "../context/todoContext";

function TodoItem({ todo }) {
  const dispatch = useTodoDispatcher();
  return (
    <li
      onClick={() =>
        dispatch({
          type: "SELECT_TODO",
          id: todo.id,
        })
      }
      className={`mb-10 d-flex flex-row justify-content-center align-items-center p-10 ${
        todo.selected ? "selected" : ""
      }  `}
    >
      <span className="flex-fill mr-15">
        {todo.content} {todo.done && "( ✓ )"}{" "}
      </span>
      <Button
        onClick={(e) => {
          e.stopPropagation();
          dispatch({
            type: "TOGGLE_TODO",
            id: todo.id,
          });
        }}
        className="mr-15"
        text="Valider"
      />
      <Button
        onClick={(e) => {
          e.stopPropagation();
          dispatch({
            type: "TOGGLE_EDIT_TODO",
            id: todo.id,
          });
        }}
        className="mr-15"
        text="Modifier"
      />
      <Button
        onClick={(e) => {
          e.stopPropagation();
          dispatch({
            type: "DELETE_TODO",
            id: todo.id,
          });
        }}
        text="Supprimer"
      />
    </li>
  );
}

export default TodoItem;
