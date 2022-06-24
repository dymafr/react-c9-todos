import { useState } from "react";
import { useTodoDispatcher } from "../context/TodoContext";
import Button from "./Button";

function AddTodo() {
  const [value, setValue] = useState("");
  const dispatch = useTodoDispatcher();

  function handleChange(e) {
    const inputValue = e.target.value;
    setValue(inputValue);
  }

  function handleKeyDown(e) {
    if (e.code === "Enter" && value.length) {
      dispatch({
        type: "ADD_TODO",
        content: value,
      });
      setValue("");
    }
  }

  function handleClick() {
    if (value.length) {
      dispatch({
        type: "ADD_TODO",
        content: value,
      });
      setValue("");
    }
  }

  return (
    <div className="d-flex flex-row justify-content-center align-items-center mb-20">
      <input
        type="text"
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        value={value}
        placeholder="Ajouter une todo"
        className="mr-15 flex-fill"
      />
      <Button text="Ajouter" onClick={handleClick} />
    </div>
  );
}

export default AddTodo;
