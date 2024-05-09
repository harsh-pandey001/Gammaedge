import React from "react";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";


const TourCard = ({ tourcard }) => {
  const { img, alt, title, subtitle } = tourcard;
  return (
    <Card>
      <CardImg top width="100%" src={img} alt={alt} />
      <CardBody>
        <CardTitle>{title}</CardTitle>
        <CardSubtitle>{subtitle}</CardSubtitle>
        <Button outline color="info" className="float-right m-1" href="tour">
          View Destination
        </Button>
      </CardBody>
    </Card>
  );
};
export default TourCard;
