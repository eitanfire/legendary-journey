import { Container, Row, Col, Button } from "reactstrap";
import CourseDetail from "../features/classes/CourseDetail";
import ClassesList from "../features/classes/ClassesList";
import { selectRandomCourse } from "../features/classes/classesSlice";

const CoursesDirectoryPage = () => {
    const selectedCourse = selectRandomCourse();

    return (
      <Container>
        <Row>
          <Col sm="5" md="7">
            <ClassesList />
          </Col>
          <Col sm="7" md="5">
            <CourseDetail course={selectedCourse} />
          </Col>
        </Row>
      </Container>
    );
};

export default CoursesDirectoryPage;