import TodoEditor from "@/components/todo-list/todo-editor";
import TodoItem from "@/components/todo-list/todo-item";
import { useTodosData } from "@/hooks/queries/useTodosData";

export default function TodoListPage() {
  const { data: todos, isLoading, error } = useTodosData();

  if (error) return <div>오류가 발생했습니다</div>;
  if (isLoading) return <div>로딩중입니다</div>;

  return (
    <div className="flex flex-col gap-5 p-5">
      <TodoEditor />
      {todos?.map((todo) => (
        <TodoItem key={todo.id} {...todo} />
      ))}
    </div>
  );
}
