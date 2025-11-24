import { Route, Routes } from "react-router";
import "./App.css";
import TodoListPage from "./pages/todo-list-page";

function App() {
  return (
    <Routes>
      <Route path="/todo-list" element={<TodoListPage />} />
    </Routes>
  );
}

export default App;
