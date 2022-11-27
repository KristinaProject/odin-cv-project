import { Card } from "./Card";

export function EducOutput(props) {
  return (
    <div id="eduOutput">
      {props.data.length === 0 ? (
        <h5 className="text-center fst-italic">Insert education info</h5>
      ) : (
        <div className="d-flex gap-2 flex-wrap">
          {props.data.map((item) =>
          <Card item={item} OnDelete={props.OnDelete} />
          )}
        </div>
      )}
    </div>
  );
}
