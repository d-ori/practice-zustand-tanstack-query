import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { useState } from "react";
import { useCreateTodoMutation } from "@/hooks/mutations/use-create-todo-mutation";

export default function TodoEditor() {
  const { mutate, isPending } = useCreateTodoMutation();
  const [content, setContent] = useState("");

  const handleAddClick = () => {
    if (content.trim() === "") return;
    mutate(content);
    setContent("");
  };

  const handleEnterKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleAddClick();
  };

  return (
    <div className="flex gap-2">
      <Input
        placeholder="할 일을 추가하세요"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        onKeyDown={handleEnterKeyDown}
      />
      <Button onClick={handleAddClick} disabled={isPending}>
        추가
      </Button>
    </div>
  );
}
