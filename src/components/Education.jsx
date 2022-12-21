import { useState } from "react";
import { EducationCol } from "./EducationCol";

const eduInfo = {
  school: "",
  degree: "",
  startDate: "",
  endDate: "",
  abilities: "",
};

export function Education(props) {
  const [form, setForm] = useState(eduInfo);

  function onchange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
    props.setEducation([...props.Education, {...form}])
  }

  function handleClick() {
    const element = <EducationCol onChange={() => onchange} key={form.school} onDelete={props.onDelete} form={form}/>;
    const addElement = props.education.concat(element);
    props.setEducation(addElement);
    return;
  }

  return (
    <div id="educa">
      <div>{props.education.map((item) => item)}</div>
      <button className="btn btn-success" onClick={handleClick}>
        Add Education
      </button>
    </div>
  );
}
