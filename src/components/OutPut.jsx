export function OutPut(props) {
  return (
    <div id="output" className="p-3">
      <ul className="list-group">
        <li className="list-group-item">Name: {props.data.name}</li>
        <li className="list-group-item">Surname: {props.data.surname}</li>
        <li className="list-group-item">Email: {props.data.email}</li>
        <li className="list-group-item">Phone number: {props.data.phonenumber}</li>
        <li className="list-group-item">Birthdate: {props.data.birthdate}</li>
      </ul>
    </div>
  );
}
