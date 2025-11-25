import { useDeleteTodo } from "@/store/todos";
import { Button } from "../ui/button";
import { Link } from "react-router";

export default function TodoItem({
  id,
  content,
}: {
  id: string;
  content: string;
}) {
  const deleteTodo = useDeleteTodo();

  const handleDeleteClick = () => {
    deleteTodo(id);
  };

  return (
    <div className="flex items-center justify-between border p-2">
      <Link to={`/todo-list/${id}`}>{content}</Link>
      <Button variant={"destructive"} onClick={handleDeleteClick}>
        삭제
      </Button>
    </div>
  );
}
