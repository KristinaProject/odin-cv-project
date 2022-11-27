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
  const [data, setData] = useState([]);

  function onchange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
    props.setEducation([...props.Education, {...form}])
  }
  console.log(form)

  function handleClick() {
    const element = <EducationCol onChange={() => onchange} key={form.school} onDelete={props.onDelete} form={form}/>;
    const addElement = data.concat(element);
    setData(addElement);
    return;
  }

  return (
    <div id="educa">
      <div className="accordion" id="add">{data.map((item) => item)}</div>
      <button className="btn btn-success" onClick={handleClick}>
        Add Education
      </button>
    </div>
  );
}
