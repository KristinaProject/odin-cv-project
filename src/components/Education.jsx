export function Education(props) {
  return (
    <form id="educa" className="row p-3 g-2">
      <div className="form-floating">
        <input type="text" className="form-control" name="school" />
        <label htmlFor="school">School or university name: </label>
      </div>
      <div className="form-floating">
        <input type="text" className="form-control" name="degree" />
        <label htmlFor="degree">Degree: </label>
      </div>
      <div className="form-floating">
        <input type="date" className="form-control" name="startDate" />
        <label htmlFor="startDate">Start date: </label>
      </div>
      <div className="form-floating">
        <input type="date" className="form-control" name="endDate" />
        <label htmlFor="endDate">End date: </label>
      </div>
      <button type="submit" className="btn btn-success">Submit</button>
    </form>
  );
}
