import { useState } from "react";

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
  }

  function onSubmitEdu(e) {
    e.preventDefault();
    props.setEducation([...props.education, { ...form }]);
    reset();
  }

  function reset() {
    setForm(eduInfo);
  }

  return (
    <form id="educa" className="row me-4 g-2 " onSubmit={(e) => onSubmitEdu(e)}>
      <div className="form-floating">
        <input
          required
          type="text"
          className="form-control"
          name="school"
          value={form.school}
          onChange={(e) => onchange(e)}
        />
        <label htmlFor="school">School or university name: </label>
      </div>
      <div className="form-floating">
        <input
          required
          type="text"
          className="form-control"
          name="degree"
          value={form.degree}
          onChange={(e) => onchange(e)}
        />
        <label htmlFor="degree">Degree: </label>
      </div>
      <div className="col-md">
        <div className="form-floating">
          <input
            required
            type="date"
            className="form-control"
            name="startDate"
            value={form.startDate}
            onChange={(e) => onchange(e)}
          />
          <label htmlFor="startDate">Start date: </label>
        </div>
      </div>
      <div className="col-md">
        <div className="form-floating">
          <input
            required
            type="date"
            className="form-control"
            name="endDate"
            value={form.endDate}
            onChange={(e) => onchange(e)}
          />
          <label htmlFor="endDate">End date: </label>
        </div>
      </div>

      <div className="form-floating">
        <textarea
          required
          type="text"
          className="form-control"
          name="abilities"
          value={form.abilities}
          onChange={(e) => onchange(e)}
        />
        <label htmlFor="abilities">Abilities: </label>
      </div>
      <button type="submit" className="btn btn-success">
        Submit
      </button>
    </form>
  );
}
