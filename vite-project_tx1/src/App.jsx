import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Management from "./components/Management/Management";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Management />
    </>
  );
}

export default App;
