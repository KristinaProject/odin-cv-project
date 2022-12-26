export function EditExpoCard(props) {
  return (
    <div>
      <input
        type="text"
        name="cName"
        defaultValue={props.form.cName}
        className="form-control form-control-sm"
        onChange={props.handleChange}
      />
      <div>
        <div className="d-flex justify-content-between">
          <input
            className="form-control form-control-sm"
            type="text"
            name="role"
            defaultValue={props.form.role}
            onChange={props.handleChange}
          />

          <div className="d-flex flex-column">
            <input
              type="date"
              name="startE"
              className="form-control form-control-sm"
              defaultValue={props.form.startE}
              onChange={props.handleChange}
            />
            <input
              type="date"
              name="endE"
              className="form-control form-control-sm"
              defaultValue={props.form.endE}
              onChange={props.handleChange}
            />
          </div>
        </div>

        <input
          type="text"
          name="description"
          className="form-control form-control-sm"
          defaultValue={props.form.description}
          onChange={props.handleChange}
        />

        <button className="btn btn-primary" onClick={props.onCancel}>
          Cancel
        </button>
        <button className="btn btn-secondary ms-2">Save</button>
      </div>
    </div>
  );
}
