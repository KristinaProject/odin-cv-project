import "./App.css";
import { Basis } from "./Basis";
import { useState } from "react";
import { OutPut } from "./OutPut";

const details = [
  {
    name: "",
    surname: "",
    email: "",
    phonenumber: "",
  },
];

function App() {
  const [form, setForm] = useState(details);

  return (
    <>
      <Basis cvForm={form} />
      <OutPut setCvForm={setForm} />
    </>
  );
}

export default App;
