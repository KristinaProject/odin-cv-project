import "./App.css";
import { Basis } from "./components/Basis";
import { useState } from "react";
import { OutPut } from "./components/OutPut";
import { Header } from "./components/Header";
import { Education } from "./components/Education";

const details = {
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
      <div className="d-flex boo">
        <Basis onChange={() => onChange} />
        <OutPut data={form} />
      </div>
      <h3 className="text-center">Write your education</h3>
      <div className="d-flex boo">
        <Education />
      </div>
    </>
  );
}

export default App;
