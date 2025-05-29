import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Sign from "./components/Sign/Sign";
import Profile from "./components/Profile/Profile";
import HomePage from "./components/HomePage/HomePage";
function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signin" element={<Sign />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
