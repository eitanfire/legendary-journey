import { CLASSES } from "../../app/shared/CLASSES";
import { Col, Row } from "reactstrap";
import ClassCard from "./ClassCard";

const ClassesList = () => {
  return (
    <Row className="ms-auto">
      {CLASSES.map((course) => {
        return (
          <Col md="5" className="m-4" key={course.id}>
            <ClassCard course={course} />
          </Col>
        );
      })}
    </Row>
  );
};

export default ClassesList;