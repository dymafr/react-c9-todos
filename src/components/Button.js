import { useTodos } from "../context/TodoContext";

function Button({ text, className, ...props }) {
  const { theme } = useTodos();

  return (
    <button
      {...props}
      className={`btn btn-${theme} ${className ? className : ""}`}
    >
      {text}
    </button>
  );
}

export default Button;
