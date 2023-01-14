import { Container, Row, Col, Button } from "reactstrap";
import CourseDetail from "../features/courses/CourseDetail";
import CoursesList from "../features/courses/CoursesList";
import { selectRandomCourse } from "../features/courses/coursesSlice";

const CoursesDirectoryPage = () => {
    const selectedCourse = selectRandomCourse();

    return (
      <Container>
        <Row>
          <Col sm="5" md="7">
            <CoursesList />
          </Col>
          <Col sm="7" md="5">
            <CourseDetail course={selectedCourse} />
          </Col>
        </Row>
      </Container>
    );
};

export default CoursesDirectoryPage;