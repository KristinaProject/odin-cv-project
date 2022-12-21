export function EducationCol(props) {
  return (
    <div className="card">
      <div className="card-header" id={props.school}>
        <h5 className="mb-0">{props.school}</h5>
      </div>
      <div className="card-body">
        <form className="row me-4 g-2 ">
          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              name="school"
              value={props.school}
              onChange={props.onChange()}
            />
            <label htmlFor="school">School or university name: </label>
          </div>
          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              name="degree"
              value={props.degree}
              onChange={props.onChange()}
            />
            <label htmlFor="degree">Degree: </label>
          </div>
          <div className="col-md">
            <div className="form-floating">
              <input
                type="date"
                className="form-control"
                name="startDate"
                value={props.startDate}
                onChange={props.onChange()}
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
                value={props.endDate}
                onChange={props.onChange()}
              />
              <label htmlFor="endDate">End date: </label>
            </div>
          </div>

          <div className="form-floating">
            <textarea
              type="text"
              className="form-control"
              name="abilities"
              value={props.abilities}
              onChange={props.onChange()}
            />
            <label htmlFor="abilities">Abilities: </label>
          </div>
          <button className="btn btn-danger" onDelete={props.onDelete}>
            Delete
          </button>
        </form>
      </div>
    </div>
  );
}
