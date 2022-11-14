export function Basis(props) {
  return (
    <form
      id="basis"
      className="row g-2 p-3"
    >
      <div className="col-md">
        <div className="form-floating">
          <input
            type="text"
            className="form-control"
            name="name"
            value={props.name}
            onChange={props.onChange()}
          />
          <label htmlFor="name">Name: </label>
        </div>
      </div>
      <div className="col-md">
        <div className="form-floating">
          <input
            type="text"
            className="form-control"
            name="surname"
            value={props.surname}
            onChange={props.onChange()}
          />
          <label htmlFor="surname">Surname: </label>
        </div>
      </div>

      <div className="form-floating">
        <input
          type="email"
          className="form-control"
          name="email"
          value={props.email}
          onChange={props.onChange()}
        />
        <label htmlFor="email">Email address: </label>
      </div>
      <div className="form-floating">
        <input
          type="number"
          className="form-control"
          name="phonenumber"
          value={props.phonenumber}
          onChange={props.onChange()}
        />
        <label htmlFor="phonenumber">Phone number: </label>
      </div>
      <div className="form-floating">
        <input
          type="date"
          className="form-control"
          name="birthdate"
          value={props.birthdate}
          onChange={props.onChange()}
        />
        <label htmlFor="date">Birthdate: </label>
      </div>
    </form>
  );
}
