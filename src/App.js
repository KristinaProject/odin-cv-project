import "./App.css";
import { Basis } from "./Basis";
import { useState } from "react";

function App() {
  const [form, setForm] = useState();

  return (
    <>
      <Basis />
    </>
  );
}

export default App;
