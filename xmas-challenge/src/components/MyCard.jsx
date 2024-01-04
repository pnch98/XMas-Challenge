import { Button, Card, CardImg } from "react-bootstrap";

const MyCard = (props) => {
  return (
    <Card className="shadow-sm">
      <CardImg
        width="200px"
        height="300px"
        style={{
          backgroundImage: `url(${props.image})`,
          backgroundRepeat: "no-repeat",
          backgroundPositionX: "center",
          objectFit: "contain",
        }}
        onClick={() => props.showCard(props.id)}
        className="pointer"
      />

      <Card.Body className="text-start">
        <Card.Title>{props.ph}</Card.Title>
        <Card.Text>{props.text}</Card.Text>
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <Button
              variant="transparent"
              className="border border-1 border-secondary rounded-start-1 rounded-end-0"
              onClick={() => props.openImg(props.largeImage)}
            >
              View
            </Button>
            <Button
              variant="transparent"
              className="border border-1 border-secondary rounded-start-0 rounded-end-1"
              onClick={(event) => {
                event.target.closest("div.col").remove();
              }}
            >
              Hide
            </Button>
          </div>
          <small className="text-secondary">{props.id}</small>
        </div>
      </Card.Body>
    </Card>
  );
};
export default MyCard;
