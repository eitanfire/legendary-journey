import { Card, CardImg, CardImgOverlay, CardTitle } from "reactstrap";

const ClassCard = (props) => {
        return (
          <Card>
            <CardImg
              width="100%"
              src={props.course.image}
              alt={props.course.name}
            />{" "}
            <CardImgOverlay>
              <CardTitle>{props.course.name}</CardTitle>
            </CardImgOverlay>
          </Card>
        );
}

export default ClassCard;