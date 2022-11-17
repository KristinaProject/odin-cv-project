export function OutPut(props) {
  return (
    <div id="output" className="p-4 rounded-end shadow">
        <h3 >Name: {props.data.name}</h3>
        <h3 >Surname: {props.data.surname}</h3>
        <div >Email: {props.data.email}</div>
        <div >Phone number: {props.data.phonenumber}</div>
        <div >Birthdate: {props.data.birthdate}</div>
    </div>
  );
}
