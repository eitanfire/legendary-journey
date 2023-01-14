import { Card, CardImg, CardText, CardBody, Col } from "reactstrap";

const CourseDetail = ( { course } ) => {
        const { image, name, description } = course;

    return (
      <Col md="12" className="m-4">
        <Card>
          <CardImg top src={image} alt={name} />
          <CardBody>
            <CardText>{description}</CardText>
          </CardBody>
        </Card>
      </Col>
    );
};

export default CourseDetail;