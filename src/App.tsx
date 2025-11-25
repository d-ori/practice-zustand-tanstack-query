import { Route, Routes } from "react-router";
import "./App.css";
import TodoListPage from "./pages/todo-list-page";
import TodoDetailPage from "./pages/todo-detail-page";

function App() {
  return (
    <Routes>
      <Route path="/todo-list" element={<TodoListPage />} />
      <Route path="/todo-list/:id" element={<TodoDetailPage />} />
    </Routes>
  );
}

export default App;
