import "./App.css";
import { Basis } from "./Basis";
import { useState } from "react";
import { OutPut } from "./OutPut";
import { Header } from "./Header";

const details = [
  {
    name: "",
    surname: "",
    email: "",
    phonenumber: "",
    birthdate: "",
  },
];

function App() {
  const [form, setForm] = useState(details);

  return (
    <>
      <Header />
      <div id="app" className="d-flex">
        <Basis cvForm={setForm} />
        <OutPut setCvForm={form} />
      </div>
    </>
  );
}

export default App;
