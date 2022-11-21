export function ExpOutput(props) {
  return (
    <div id="expOut">
      {props.data.length === 0 ? (
        <h5 className="text-center fst-italic">Insert education info</h5>
      ) : (
        <div className="d-flex gap-2 flex-wrap">
          {props.data.map((item) => (
            <div className="card" key={item.cName}>
              <h5 className="card-header">{item.cName}</h5>
              <div className="card-body">
                <div className="d-flex justify-content-between">
                  <h5 className="card-title">{item.role}</h5>
                  <p>
                    {item.startE} {item.endE}
                  </p>
                </div>
                <p className="card-text">{item.description}</p>
                <button
                  className="btn btn-primary"
                  onClick={() => props.onDelete(item.cName)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
