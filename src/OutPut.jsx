export function OutPut(props) {
  return (
    <div id="output" className="p-3">
      <ul class="list-group">
        <li class="list-group-item">Name: {props.name}</li>
        <li class="list-group-item">Surname: {props.surname}</li>
        <li class="list-group-item">Email: {props.email}</li>
        <li class="list-group-item">Phone number: {props.phonenumber}</li>
        <li class="list-group-item">Birthdate: {props.birthdate}</li>
      </ul>
    </div>
  );
}
