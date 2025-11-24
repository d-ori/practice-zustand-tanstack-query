import TodoEditor from "@/components/todo-list/todo-editor";
import TodoItem from "@/components/todo-list/todo-item";

const dummyTodos = [
  { id: 1, content: "더미1" },
  { id: 2, content: "더미2" },
  { id: 3, content: "더미3" },
  { id: 4, content: "더미4" },
];

export default function TodoListPage() {
  return (
    <div className="flex flex-col gap-5 p-5">
      <TodoEditor />
      {dummyTodos.map((todo) => (
        <TodoItem key={todo.id} {...todo} />
      ))}
    </div>
  );
}
