import { useState } from "react";
import Button from "./Button";

function AddTodo({ addTodo }) {
  const [value, setValue] = useState("");

  function handleChange(e) {
    const inputValue = e.target.value;
    setValue(inputValue);
  }

  function handleKeyDown(e) {
    if (e.code === "Enter" && value.length) {
      addTodo(value);
      setValue("");
    }
  }

  function handleClick() {
    if (value.length) {
      addTodo(value);
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
