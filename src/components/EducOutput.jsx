import { useState } from "react";
import { EditEduCard } from "./EditEduCard";

export function EducOutput(props) {
  const [edit, setEdit] = useState(null);
  const [form, setForm] = useState({
    school: "",
    degree: "",
    startDate: "",
    endDate: "",
    abilities: "",
  });

  function onEditing(e, item) {
    e.preventDefault();
    setEdit(item.school);

    const values = {
      school: item.school,
      degree: item.degree,
      startDate: item.startDate,
      endDate: item.endDate,
      abilities: item.abilities,
    };

    setForm(values);
  }

  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    setForm({ ...form, [name]: value });
  }

  function handleEdit(e) {
    e.preventDefault();

    const data = {
      school: form.school,
      degree: form.degree,
      startDate: form.startDate,
      endDate: form.endDate,
      abilities: form.abilities,
    };

    const newData = [...props.data];
    const index = props.data.findIndex((item) => item.school === edit);
    newData[index] = data;
    props.setData(newData);
    setEdit(null);
  }

  return (
    <div id="eduOutput">
      <form on onSubmit={(e) => handleEdit(e)}>
        {props.data.length === 0 ? (
          <h5 className="text-center fst-italic">Insert education info</h5>
        ) : (
          <div className="d-flex gap-2 flex-wrap">
            {props.data.map((item) =>
              edit === item.school ? (
                <EditEduCard
                  key={item.school}
                  handleChange={handleChange}
                  onCancel={() => {
                    setEdit(null);
                  }}
                  form={form}
                />
              ) : (
                <div className="card card-mine" key={item.school}>
                  <h5 className="card-header">{item.school}</h5>
                  <div className="card-body">
                    <div className="d-flex justify-content-between">
                      <h5 className="card-title">{item.degree}</h5>

                      <p className="d-flex flex-column">
                        <span>{item.startDate}</span>{" "}
                        <span>{item.endDate}</span>
                      </p>
                    </div>
                    <p className="card-text">{item.abilities}</p>
                    <button
                      className="btn btn-secondary"
                      onClick={() => props.onDelete(item.school)}
                    >
                      Delete
                    </button>
                    <button
                      className="btn btn-success ms-2"
                      onClick={(e) => onEditing(e, item)}
                    >
                      Edit
                    </button>
                  </div>
                </div>
              )
            )}
          </div>
        )}
      </form>
    </div>
  );
}
