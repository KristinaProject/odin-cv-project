import { Card } from "./Card";
import { EditEduCard } from "./EditEduCard";

export function EducOutput(props) {
  return (
    <div id="eduOutput">
      {props.data.length === 0 ? (
        <h5 className="text-center fst-italic">Insert education info</h5>
      ) : (
        <div className="d-flex gap-2 flex-wrap">
          {props.data.map((item) =>
          props.editName !== null ? 
          <EditEduCard /> :
          <Card item={item} OnDelete={props.OnDelete} onEdit={props.onEdit}/>
          )}
        </div>
      )}
    </div>
  );
}
