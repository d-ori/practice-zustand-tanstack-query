import { Button } from "../ui/button";
import { Link } from "react-router";
import { useDeleteTodoMutation } from "@/hooks/mutations/use-delete-todo-mutation";
import type { Todo } from "@/types";
import { useUpdateTodoMutation } from "@/hooks/mutations/use-update-todo-mutation";

export default function TodoItem({ id, content, isDone }: Todo) {
  const { mutate: updateTodo } = useUpdateTodoMutation();
  const { mutate: deleteTodo, isPending } = useDeleteTodoMutation();

  const handleDeleteClick = () => {
    deleteTodo(id);
  };
  const handleCheckboxClick = () => {
    updateTodo({
      id,
      isDone: !isDone,
    });
  };

  return (
    <div className="flex items-center justify-between border p-2">
      <input
        disabled={isPending}
        onChange={handleCheckboxClick}
        type={"checkbox"}
        checked={isDone}
      />

      <Link to={`/todo-list/${id}`}>{content}</Link>
      <Button
        variant={"destructive"}
        onClick={handleDeleteClick}
        disabled={isPending}
      >
        삭제
      </Button>
    </div>
  );
}
