export function EditEduCard(props) {
  return (
    <div>
      <input
        type="text"
        name="school"
        defaultValue={props.form.school}
        className="form-control form-control-sm"
        onChange={props.handleChange}
      />
      <div>
        <div className="d-flex justify-content-between">
          <input
            className="form-control form-control-sm"
            type="text"
            name="degree"
            defaultValue={props.form.degree}
            onChange={props.handleChange}
          />

          <div className="d-flex flex-column">
            <input
              type="date"
              name="startDate"
              className="form-control form-control-sm"
              defaultValue={props.form.startDate}
              onChange={props.handleChange}
            />
            <input
              type="date"
              name="endDate"
              className="form-control form-control-sm"
              defaultValue={props.form.endDate}
              onChange={props.handleChange}
            />
          </div>
        </div>

        <input
          type="text"
          name="abilities"
          className="form-control form-control-sm"
          defaultValue={props.form.abilities}
          onChange={props.handleChange}
        />

        <button className="btn btn-secondary" onClick={props.onCancel}>
          Cancel
        </button>
        <button className="btn btn-success ms-2">Save</button>
      </div>
    </div>
  );
}
