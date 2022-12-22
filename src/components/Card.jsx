export function Card(props) {
  return (
    <div className="card card-mine" key={props.item.school}>
      <h5 className="card-header">{props.item.school}</h5>
      <div className="card-body">
        <div className="d-flex justify-content-between">
          <h5 className="card-title">{props.degree}</h5>

          <p className="d-flex flex-column">
            <span>{props.startDate}</span> <span>{props.endDate}</span>
          </p>
        </div>
        <p className="card-text">{props.abilities}</p>
      </div>
    </div>
  );
}