export function EducOutput(props) {
  return (
    <div id="eduOutput">
      {" "}
      {props.data.length === 0 ? (
        <h5 className="text-center fst-italic">Insert education info</h5>
      ) : (
        <div className="d-flex gap-2 flex-wrap">
          {props.data.map((item) => (
            <div className="card" key={item.school}>
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
                  onClick={() => props.onClick(item.school)}
                >
                  Edit
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
