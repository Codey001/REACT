import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./componenets/Card";

function App() {
  const [count, setCount] = useState(0);
  let newObj = {
    username : "Sunny",
    age: 21
  }

  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl mb-4">Tailwind Test</h1>
      <Card name="Amelia" btnText="Click Me"/>
      <Card name="Anjali" btnText="Visit Me"/>
      
    </>
  );
}

export default App;
