import { Col, Container, Row } from "react-bootstrap";
import MyCardPlaceholder from "./MyCardPlaceholder";

const NotLoadedState = () => {
  return (
    <Container fluid className="bg-light p-5">
      <Container>
        <Row xs={1} md={2} lg={3} className="gy-3">
          <Col>
            <MyCardPlaceholder />
          </Col>
          <Col>
            <MyCardPlaceholder />
          </Col>
          <Col>
            <MyCardPlaceholder />
          </Col>
          <Col>
            <MyCardPlaceholder />
          </Col>
          <Col>
            <MyCardPlaceholder />
          </Col>
          <Col>
            <MyCardPlaceholder />
          </Col>
          <Col>
            <MyCardPlaceholder />
          </Col>
          <Col>
            <MyCardPlaceholder />
          </Col>
          <Col>
            <MyCardPlaceholder />
          </Col>
        </Row>
      </Container>
    </Container>
  );
};
export default NotLoadedState;
