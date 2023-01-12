import { CLASSES } from "../../app/shared/CLASSES";
import { Col, Row } from "reactstrap";
import ClassCard from "./ClassCard";

const ClassesList = () => {
  return (
    <Row className="ms-auto">
      {CLASSES.map((plan) => {
        return (
          <Col md="5" className="m-4" key={plan.id}>
            <ClassCard class={plan} />
          </Col>
        );
      })}
    </Row>
  );
};

export default ClassesList;