import { useRef, useState } from "react";

const eduInfo = {
  school: "",
  degree: "",
  start: "",
  end: "",
  ability: "",
};

export function Education(props) {
  const [form, setForm] = useState(eduInfo);

  const schoolRef = useRef(null);
  const degreeRef = useRef(null);
  const startRef = useRef(null);
  const endRef = useRef(null);
  const abilityRef = useRef(null);

  function onSubmitEdu(e) {
    e.preventDefault();

    const edu = {
      school: schoolRef.current.value,
      degree: degreeRef.current.value,
      start: startRef.current.value,
      end: endRef.current.value,
      ability: abilityRef.current.value,
    };

    setForm(edu);

    props.setEducation([...props.education, {...form}]);
  }

  return (
    <form id="educa" className="row p-3 g-2" onSubmit={onSubmitEdu}>
      <div className="form-floating">
        <input
          type="text"
          className="form-control"
          name="school"
          ref={schoolRef}
        />
        <label htmlFor="school">School or university name: </label>
      </div>
      <div className="form-floating">
        <input
          type="text"
          className="form-control"
          name="degree"
          ref={degreeRef}
        />
        <label htmlFor="degree">Degree: </label>
      </div>
      <div className="col-md">
        <div className="form-floating">
          <input
            type="date"
            className="form-control"
            name="startDate"
            ref={startRef}
          />
          <label htmlFor="startDate">Start date: </label>
        </div>
      </div>
      <div className="col-md">
        <div className="form-floating">
          <input
            type="date"
            className="form-control"
            name="endDate"
            ref={endRef}
          />
          <label htmlFor="endDate">End date: </label>
        </div>
      </div>

      <div className="form-floating">
        <textarea
          type="text"
          className="form-control"
          name="abiilities"
          ref={abilityRef}
        />
        <label htmlFor="abilities">Abilities: </label>
      </div>
      <button type="submit" className="btn btn-success">
        Submit
      </button>
    </form>
  );
}
