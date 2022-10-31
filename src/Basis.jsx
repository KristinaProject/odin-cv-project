export function Basis(props) {
  return (
    <form id="basis" className="row g-2 p-3">
      <div className="col-md">
        <div className="form-floating">
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Password"
          />
          <label for="name">Name: </label>
        </div>
      </div>
      <div className="col-md">
        <div className="form-floating">
          <input
            type="text"
            className="form-control"
            id="surname"
            placeholder="Password"
          />
          <label for="surname">Surname: </label>
        </div>
      </div>

      <div className="form-floating">
        <input
          type="email"
          className="form-control"
          id="email"
          placeholder="name@example.com"
        />
        <label for="email">Email address: </label>
      </div>
      <div className="form-floating">
        <input
          type="numbers"
          className="form-control"
          id="phonenumber"
          placeholder="+37060000000"
        />
        <label for="phonenumber">Phone number: </label>
      </div>
      <button type="submit" className="btn btn-success">Submit</button>
    </form>
  );
}
