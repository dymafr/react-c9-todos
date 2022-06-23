import { TodoFeature } from "./components/TodoFeature";
import TodoProvider from "./components/TodoProvider";

function App() {
  return (
    <TodoProvider>
      <TodoFeature />
    </TodoProvider>
  );
}

export default App;
