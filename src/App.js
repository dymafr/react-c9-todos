// import { useState } from "react";
// import AddTodo from "./components/AddTodo";
// import TodoList from "./components/TodoList";

// function App() {
//   const [todoList, setTodoList] = useState([]);

//   function addTodo(content) {
//     const todo = {
//       id: crypto.randomUUID(),
//       content,
//       done: false,
//       edit: false,
//       selected: false,
//     };
//     setTodoList([...todoList, todo]);
//   }

//   function deleteTodo(id) {
//     setTodoList(todoList.filter((todo) => todo.id !== id));
//   }

//   function toggleTodo(id) {
//     setTodoList(
//       todoList.map((todo) =>
//         todo.id === id
//           ? {
//               ...todo,
//               done: !todo.done,
//             }
//           : todo
//       )
//     );
//   }

//   function toggleTodoEdit(id) {
//     setTodoList(
//       todoList.map((todo) =>
//         todo.id === id
//           ? {
//               ...todo,
//               edit: !todo.edit,
//             }
//           : todo
//       )
//     );
//   }

//   function editTodo(id, content) {
//     setTodoList(
//       todoList.map((todo) =>
//         todo.id === id
//           ? {
//               ...todo,
//               edit: false,
//               content,
//             }
//           : todo
//       )
//     );
//   }

//   function selectTodo(id) {
//     setTodoList(
//       todoList.map((todo) =>
//         todo.id === id
//           ? {
//               ...todo,
//               selected: true,
//             }
//           : {
//               ...todo,
//               selected: false,
//             }
//       )
//     );
//   }

//   return (
//     <div className="d-flex flex-row justify-content-center align-items-center p-20">
//       <div className="card container p-20">
//         <h1 className="mb-20">Todo list</h1>
//         <AddTodo addTodo={addTodo} />
//         <TodoList
//           todoList={todoList}
//           deleteTodo={deleteTodo}
//           toggleTodo={toggleTodo}
//           toggleTodoEdit={toggleTodoEdit}
//           editTodo={editTodo}
//           selectTodo={selectTodo}
//         />
//       </div>
//     </div>
//   );
// }
import { createContext, useContext, useState } from "react";

const dataContext = createContext("infos");

function A() {
  const [value, setValue] = useState("infos");
  const data = useContext(dataContext);
  return (
    <>
      <h1>A</h1>
      <h2>{data}</h2>
      <dataContext.Provider value={value}>
        <B />
      </dataContext.Provider>
    </>
  );
}

function B() {
  return (
    <>
      <h1>B</h1>
      <dataContext.Provider value="infos from B">
        <C />
      </dataContext.Provider>
    </>
  );
}

function C() {
  const data = useContext(dataContext);
  return (
    <>
      <h1>C</h1>
      <h2>{data}</h2>
    </>
  );
}

function App() {
  const data = "infos";
  return <A data={data} />;
}

export default App;
