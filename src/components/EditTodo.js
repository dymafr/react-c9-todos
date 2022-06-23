import { useState } from "react";
import Button from "./Button";
import { useTodoDispatcher } from "../context/todoContext";

function EditTodo({ todo }) {
  const dispatch = useTodoDispatcher();
  const [value, setValue] = useState(todo.content);

  function handleChange(e) {
    const inputValue = e.target.value;
    setValue(inputValue);
  }

  function handleKeyDown(e) {
    if (e.code === "Enter" && value.length) {
      dispatch({
        type: "EDIT_TODO",
        id: todo.id,
        content: value,
      });
      setValue("");
    }
  }

  function handleClick() {
    if (value.length) {
      dispatch({
        type: "EDIT_TODO",
        id: todo.id,
        content: value,
      });
      setValue("");
    }
  }

  return (
    <div className="d-flex flex-row justify-content-center align-items-center mb-10">
      <input
        type="text"
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        value={value}
        placeholder="Ajouter une todo"
        className="mr-15 flex-fill"
      />
      <Button
        onClick={() =>
          dispatch({
            type: "TOGGLE_EDIT_TODO",
            id: todo.id,
          })
        }
        className="mr-15"
        text="Annuler"
      />
      <Button onClick={handleClick} text="Sauvegarder" />
    </div>
  );
}

export default EditTodo;
