import { useCreateTodo } from "@/store/todos";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { useState } from "react";

export default function TodoEditor() {
  const createTodo = useCreateTodo();
  const [content, setContent] = useState("");

  const handleAddClick = () => {
    if (content.trim() === "") return;
    createTodo(content);
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
      <Button onClick={handleAddClick}>추가</Button>
    </div>
  );
}
