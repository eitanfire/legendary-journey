import { Card, CardImg, CardImgOverlay, CardTitle } from "reactstrap";

const ClassCard = (props) => {
        return (
          <Card>
            <CardImg
              width="100%"
              src={props.class.image}
              alt={props.class.name}
            />{" "}
            <CardImgOverlay>
              <CardTitle>{props.class.name}</CardTitle>
            </CardImgOverlay>
          </Card>
        );
}

export default ClassCard;