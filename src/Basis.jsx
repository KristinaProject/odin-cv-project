export function Basis(props) {
  return (
    <form id="basis" className="row g-2 p-3" onSubmit={(e) => props.onSubmit(e)}>
      <div className="col-md">
        <div className="form-floating">
          <input
            type="text"
            className="form-control"
            id="name"
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
            id="surname"
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
          id="email"
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
          id="phonenumber"
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
          id="date"
          name="birthdate"
          value={props.birthdate}

          onChange={props.onChange()}
        />
        <label htmlFor="date">Birthdate: </label>
      </div>
      <button type="submit" className="btn btn-success">Submit</button>
    </form>
  );
}
