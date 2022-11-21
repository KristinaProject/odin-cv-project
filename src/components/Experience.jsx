import { useState } from "react";

const expInfo = {
  cName: "",
  role: "",
  startE: "",
  endE: "",
  description: "",
};

export function Experience(props) {
  const [form, setForm] = useState(expInfo);

  function onchange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function onSubmit(e) {
    e.preventDefault();
    props.setExperience([...props.experience, { ...form }]);
    setForm(expInfo);
  }

  return (
    <form id="expie" className="row me-4 g-2" onSubmit={(e) => onSubmit(e)}>
      <div className="form-floating">
        <input
          required
          type="text"
          className="form-control"
          name="cName"
          value={form.cName}
          onChange={(e) => onchange(e)}
        />
        <label htmlFor="cName">Company name: </label>
      </div>
      <div className="form-floating">
        <input
          required
          type="text"
          className="form-control"
          name="role"
          value={form.role}
          onChange={(e) => onchange(e)}
        />
        <label htmlFor="role">Role in company: </label>
      </div>
      <div className="col-md">
        <div className="form-floating">
          <input
            required
            type="date"
            className="form-control"
            name="startE"
            value={form.startE}
            onChange={(e) => onchange(e)}
          />
          <label htmlFor="startEDate">Start date: </label>
        </div>
      </div>
      <div className="col-md">
        <div className="form-floating">
          <input
            required
            type="date"
            className="form-control"
            name="endE"
            value={form.endE}
            onChange={(e) => onchange(e)}
          />
          <label htmlFor="endEDate">End date: </label>
        </div>
      </div>

      <div className="form-floating">
        <textarea
          required
          type="text"
          className="form-control"
          name="description"
          value={form.description}
          onChange={(e) => onchange(e)}
        />
        <label htmlFor="description">Description: </label>
      </div>
      <button type="submit" className="btn btn-success">
        Submit
      </button>
    </form>
  );
}
