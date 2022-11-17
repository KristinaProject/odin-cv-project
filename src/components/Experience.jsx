import { useRef } from "react";
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

  const cNameRef = useRef(null);
  const roleRef = useRef(null);
  const startERef = useRef(null);
  const endERef = useRef(null);
  const descriptionRef = useRef(null);

  function onchange() {
    const exp = {
      cName: cNameRef.current.value,
      role: roleRef.current.value,
      startE: startERef.current.value,
      endE: endERef.current.value,
      description: descriptionRef.current.value,
    };

    setForm(exp);
  }

  function onSubmit(e) {
    e.preventDefault();
    props.setExperience([...props.experience, { ...form }]);
  }

  return (
    <form id="expie" className="row me-4 g-2" onSubmit={onSubmit}>
      <div className="form-floating">
        <input
          type="text"
          className="form-control"
          name="cName"
          ref={cNameRef}
          onChange={onchange}
        />
        <label htmlFor="cName">Company name: </label>
      </div>
      <div className="form-floating">
        <input
          type="text"
          className="form-control"
          name="role"
          ref={roleRef}
          onChange={onchange}
        />
        <label htmlFor="role">Role in company: </label>
      </div>
      <div className="col-md">
        <div className="form-floating">
          <input
            type="date"
            className="form-control"
            name="startEDate"
            ref={startERef}
            onChange={onchange}
          />
          <label htmlFor="startEDate">Start date: </label>
        </div>
      </div>
      <div className="col-md">
        <div className="form-floating">
          <input
            type="date"
            className="form-control"
            name="endEDate"
            ref={endERef}
            onChange={onchange}
          />
          <label htmlFor="endEDate">End date: </label>
        </div>
      </div>

      <div className="form-floating">
        <textarea
          type="text"
          className="form-control"
          name="description"
          ref={descriptionRef}
          onChange={onchange}
        />
        <label htmlFor="description">Description: </label>
      </div>
      <button type="submit" className="btn btn-success">
        Submit
      </button>
    </form>
  );
}
