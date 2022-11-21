import "./App.css";
import { Basis } from "./components/Basis";
import { useState } from "react";
import { OutPut } from "./components/OutPut";
import { Header } from "./components/Header";
import { Education } from "./components/Education";
import { EducOutput } from "./components/EducOutput";
import { Experience } from "./components/Experience";
import { ExpOutput } from "./components/ExpOutput";

const details = {
  name: "",
  surname: "",
  email: "",
  phonenumber: "",
  birthdate: "",
};

function App() {
  const [form, setForm] = useState(details);
  const [education, setEducation] = useState([]);
  const [experience, setExperience] = useState([]);

  function onChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function deleteEdu(school) {
    setEducation(education.filter((item) => item.school !== school));
  }

  function deleteExp(name) {
    setExperience(experience.filter((item) => item.cName !== name));
  }

  return (
    <>
      <Header />
      <div className="d-flex boo">
        <Basis onChange={() => onChange} />
        <OutPut data={form} />
      </div>
      <h3 className="text-center m-4">Write your education</h3>
      <div className="d-flex boo notStart">
        <Education setEducation={setEducation} education={education} />
        <EducOutput data={education} onDelete={deleteEdu}/>
      </div>
      <h3 className="text-center m-4">Write your experience</h3>
      <div className="d-flex boo notStart">
        <Experience setExperience={setExperience} experience={experience} />
        <ExpOutput data={experience} onDelete={deleteExp} />
      </div>
    </>
  );
}

export default App;
