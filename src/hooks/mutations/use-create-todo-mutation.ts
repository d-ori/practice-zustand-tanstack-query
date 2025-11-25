import { createTodo } from "@/api/create-todo";
import { useMutation } from "@tanstack/react-query";

export function useCreateTodoMutation() {
  return useMutation({
    mutationFn: createTodo,
    onSuccess: () => window.location.reload(),
    onError: (error) => window.alert(error.message),
  });
}
