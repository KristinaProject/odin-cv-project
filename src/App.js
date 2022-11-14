import "./App.css";
import { Basis } from "./components/Basis";
import { useState } from "react";
import { OutPut } from "./components/OutPut";
import { Header } from "./components/Header";
import { Education } from "./components/Education";
import { EducOutput } from "./components/EducOutput";

const details = {
  name: "",
  surname: "",
  email: "",
  phonenumber: "",
  birthdate: "",
};

// const eduInfo = {
//   school: "",
//   degree: "",
//   start: "",
//   end: "",
//   ability: "",
// };

function App() {
  const [form, setForm] = useState(details);
  const [education, setEducation] = useState([]);

  function onChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  console.log(education);

  return (
    <>
      <Header />
      <div className="d-flex boo">
        <Basis onChange={() => onChange} />
        <OutPut data={form} />
      </div>
      <h3 className="text-center">Write your education</h3>
      <div className="d-flex boo">
        <Education setEducation={setEducation} education={education}/>
        <EducOutput data={education}/>
      </div>
    </>
  );
}

export default App;
