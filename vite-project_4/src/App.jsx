import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Weather from "./components/Weather/Weather";
import Launcher from "./components/Launcher/Launcher";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <Weather /> */}
      <Launcher />
    </>
  );
}

export default App;
