import { useState } from "react";

export function EditEduCard(props) {
  const [form, setForm] = useState();

  function handleChange(e) {
    setForm({...form, [e.target.name] : e.target.value})
  }

  return (
    <div key={props.school}>
      <input
        type="text"
        name="school"
        defaultValue={props.school}
        className="form-control form-control-sm"
        onChange={handleChange}
      />
      <div>
        <div className="d-flex justify-content-between">
          <input
            className="form-control form-control-sm"
            type="text"
            name="degree"
            defaultValue={props.degree}
            onChange={handleChange}
          />

          <div className="d-flex flex-column">
            <input
              type="date"
              name="startDate"
              className="form-control form-control-sm"
              defaultValue={props.startDate}
              onChange={handleChange}
            />
            <input
              type="date"
              name="endDate"
              className="form-control form-control-sm"
              defaultValue={props.endDate}
              onChange={handleChange}
            />
          </div>
        </div>

        <input
          type="text"
          name="abilities"
          className="form-control form-control-sm"
          defaultValue={props.abilities}
          onChange={handleChange}
        />

        <button className="btn btn-primary" onClick={props.onCancel()}>
          Cancel
        </button>
        <button
          className="btn btn-secondary ms-2"
          onClick={props.onSubmitEdit(props.school, form)}
        >
          Save
        </button>
      </div>
    </div>
  );
}
