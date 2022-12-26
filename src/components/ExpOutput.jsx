import { useState } from "react";
import { EditExpoCard } from "./EditExpoCard";

export function ExpOutput(props) {
  const [edit, setEdit] = useState(null);
  const [form, setForm] = useState({
    cName: "",
    role: "",
    startE: "",
    endE: "",
    description: "",
  });

  function onEditing(e, item) {
    e.preventDefault();
    setEdit(item.cName);

    const values = {
      cName: item.cName,
      role: item.role,
      startE: item.startE,
      endE: item.endE,
      description: item.description,
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
      cName: form.cName,
      role: form.role,
      startE: form.startE,
      endE: form.endE,
      description: form.description,
    };

    const newData = [...props.data];
    const index = props.data.findIndex((item) => item.cName === edit);
    newData[index] = data;
    props.setData(newData);
    setEdit(null);
  }

  return (
    <div id="expOut">
      <form onSubmit={handleEdit}>
        {props.data.length === 0 ? (
          <h5 className="text-center fst-italic">Insert education info</h5>
        ) : (
          <div className="d-flex gap-2 flex-wrap">
            {props.data.map((item) =>
              edit !== item.cName ? (
                <div className="card card-mine" key={item.cName}>
                  <h5 className="card-header">{item.cName}</h5>
                  <div className="card-body">
                    <div className="d-flex justify-content-between">
                      <h5 className="card-title">{item.role}</h5>
                      <p>
                        {item.startE} {item.endE}
                      </p>
                    </div>
                    <p className="card-text">{item.description}</p>
                    <button
                      className="btn btn-secondary"
                      onClick={() => props.onDelete(item.cName)}
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
              ) : (
                <EditExpoCard
                  key={item.cName}
                  handleChange={handleChange}
                  onCancel={() => {
                    setEdit(null);
                  }}
                  form={form}
                />
              )
            )}
          </div>
        )}
      </form>
    </div>
  );
}
