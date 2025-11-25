import { API_URL } from "@/lib/constants";
import type { Todo } from "@/types";

export async function updateTodo(todo: Partial<Todo> & { id: string }) {
  const response = await fetch(`${API_URL}/todos/${todo.id}`, {
    method: "PATCH",
  });
  if (!response.ok) throw new Error("Update Todo fail");

  const data = response.json();
  return data;
}
