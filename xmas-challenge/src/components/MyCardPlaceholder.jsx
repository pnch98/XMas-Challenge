import { Button, Card } from "react-bootstrap";
import imgPlaceholder from "../data/images/thumbnail-placer.jpg";

const MyCardPlaceholder = () => {
  return (
    <Card className="shadow-sm">
      <Card.Img variant="top" src={imgPlaceholder} />
      <Card.Body className="text-start">
        <Card.Title>Card title</Card.Title>
        <Card.Text>
          This is a wider card with supporting text below as a natural lead-in to additional content. This content is a
          little bit longer.
        </Card.Text>
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <Button variant="transparent" className="border border-1 border-secondary rounded-start-1 rounded-end-0">
              View
            </Button>
            <Button variant="transparent" className="border border-1 border-secondary rounded-start-0 rounded-end-1">
              Hide
            </Button>
          </div>
          <small className="text-secondary">id</small>
        </div>
      </Card.Body>
    </Card>
  );
};
export default MyCardPlaceholder;
