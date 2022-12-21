import { useState } from "react";
import { EditEduCard } from "./EditEduCard";

export function EducOutput(props) {
  const [edit, setEdit] = useState(null);
  function onEditing(name, form) {
    // e.preventDefault();
    const newEducation = [...props.education];
    const findItem = newEducation.find((item) => item.name === name);
    findItem.name = form.name;
    console.log(findItem.name);
    props.setEducation(newEducation);
  }
  return (
    <div id="eduOutput">
      {props.data.length === 0 ? (
        <h5 className="text-center fst-italic">Insert education info</h5>
      ) : (
        <div className="d-flex gap-2 flex-wrap">
          {props.data.map((item) =>
            edit !== null ? (
              <EditEduCard onCancel={setEdit(null)} onEditing={onEditing}/>
            ) : (
              <div className="card card-mine" key={item.school}>
                <h5 className="card-header">{item.school}</h5>
                <div className="card-body">
                  <div className="d-flex justify-content-between">
                    <h5 className="card-title">{item.degree}</h5>

                    <p className="d-flex flex-column">
                      <span>{item.startDate}</span> <span>{item.endDate}</span>
                    </p>
                  </div>
                  <p className="card-text">{item.abilities}</p>
                  <button
                    className="btn btn-primary"
                    onClick={() => props.onDelete(item.school)}
                  >
                    Delete
                  </button>
                  <button
                    className="btn btn-secondary ms-2"
                    onClick={() => {
                      setEdit(true);
                    }}
                  >
                    Edit
                  </button>
                </div>
              </div>
            )
          )}
        </div>
      )}
    </div>
  );
}
