import { Card, CardImg, CardImgOverlay, CardTitle } from "reactstrap";

const ClassCard = ({ course }) => {
  const { image, name } = course;
        return (
          <Card>
            <CardImg
              width="100%"
              src={image}
              alt={name}
            />{" "}
            <CardImgOverlay>
              <CardTitle>{name}</CardTitle>
            </CardImgOverlay>
          </Card>
        );
}

export default ClassCard;