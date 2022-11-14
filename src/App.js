import "./App.css";
import { Basis } from "./Basis";
import { useState } from "react";
import { OutPut } from "./OutPut";
import { Header } from "./Header";

const details = {
  name: "",
  surname: "",
  email: "",
  phonenumber: "",
  birthdate: "",
};

const detailsNull = {
  name: "",
  surname: "",
  email: "",
  phonenumber: "",
  birthdate: "",
};

function App() {
  const [form, setForm] = useState(details);

  function onChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  return (
    <>
      <Header />
      <div id="app" className="d-flex">
        <Basis onChange={() => onChange} />
        <OutPut data={form} />
      </div>
    </>
  );
}

export default App;
