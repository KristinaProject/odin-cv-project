export function EducOutput(props) {
  return (
    <div id="eduOutput">
      {props.data.map((item) => (
        <div className="card" key={item.school}>
          <h5 className="card-header">{item.school}</h5>
          <div className="card-body">
            <div className="d-flex justify-content-between">
              <h5 className="card-title">{item.degree}</h5>
              <p>
                {item.start} {item.end}
              </p>
            </div>
            <p className="card-text">{item.ability}</p>
            <button
              className="btn btn-primary"
              onClick={() => props.onDelete(item.school)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
