export function OutPut(props) {
  return (
    <div id="output" className="p-3">
      <ul className="list-group">
        <li className="list-group-item">Name: {props.name}</li>
        <li className="list-group-item">Surname: {props.surname}</li>
        <li className="list-group-item">Email: {props.email}</li>
        <li className="list-group-item">Phone number: {props.phonenumber}</li>
        <li className="list-group-item">Birthdate: {props.birthdate}</li>
      </ul>
    </div>
  );
}
