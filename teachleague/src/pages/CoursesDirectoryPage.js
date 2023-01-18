import { Container, Row, Col, Button } from "reactstrap";
import CourseDetail from "../features/courses/CourseDetail";
import CoursesList from "../features/courses/CoursesList";
import { selectRandomCourse } from "../features/courses/coursesSlice";
import { useState } from "react";

const CoursesDirectoryPage = () => {
    const [selectedCourse, toggleCourse] = useState(selectRandomCourse());
  return (
    <>
      <Container>
        <Button onClick={() => toggleCourse(selectRandomCourse())}>
          Select Random Course
        </Button>
        <Row>
          <Col sm="5" md="7">
            <CoursesList />
          </Col>
          <Col sm="7" md="5">
            <CourseDetail course={selectedCourse} />
          </Col>
        </Row>
      </Container>
    </>
  );
};

// const CoursesDirectoryPage = () => {
//   let selectedCourse = selectRandomCourse();

//   const toggleCourse = () => {
//     selectedCourse = selectRandomCourse();
//     console.log(selectedCourse);
//   };

//   return (
//     <Container>
//       <Button onClick={() => toggleCourse()}>Select Random Course</Button>
//       <Row>
//         <Col sm="5" md="7">
//           <CoursesList />
//         </Col>
//         <Col sm="7" md="5">
//           <CourseDetail campsite={selectedCourse} />
//         </Col>
//       </Row>
//     </Container>
//   );
// };

export default CoursesDirectoryPage;
