import { useState } from "react";
import Body from "./components/Body";
import Bai_1 from "./components/Bai_1";
import postdata from "./data/post.json";
import ToggleButton from "./components/Toggle";
import Card from "./components/Card";

function App() {
  const [count, setCount] = useState(0);
  // Khoi tao useState Active
  const[active, setActive] = useState(false)
  // Ham xu li button
  const handleButton =()=>{
    setActive(!active)
  }

  //object bai shopping cart
  const productData = [
    {
      name: "iPhone 15",
      price: 25000000,
    },
    {
      name: "MacBook Air M2",
      price: 32000000,
    },
    {
      name: "iPad Pro",
      price: 28000000,
    },
  ];

  const listCart = [];

  return (
    <>
      {/* <Body products={productData} lists={listCart} />
      <Bai_1 data={postdata} />
      <button onClick={handleButton}>
        <ToggleButton active = {active} />
      </button> */}
      <Card/>
    </>
  );
}

export default App;
