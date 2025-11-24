import "./App.css";
import { Button } from "./components/ui/button";

function App() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center">
      <h1 className="text-2xl underline">Home Test</h1>
      <div className="mt-8">
        <Button>버튼</Button>
      </div>
    </div>
  );
}

export default App;
