import { useTodoDataById } from "@/hooks/queries/use-todo-data-by-id";
import { useParams } from "react-router";

export default function TodoDetailPage() {
  const params = useParams();
  const id = params.id;

  const { data, isLoading, error } = useTodoDataById(Number(id));

  if (isLoading) return <div>로딩중입니다...</div>;
  if (error || !data) return <div>에러가 발생했습니다</div>;

  return <div>{data.content}</div>;
}
