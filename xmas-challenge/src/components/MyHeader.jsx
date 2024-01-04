import { Col, Container, Navbar, Row } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Component } from "react";
import "bootstrap/js/dist/collapse";

class MyHeader extends Component {
  render() {
    return (
      <header>
        <div id="infos" className="collapse bg-dark py-3">
          <Container>
            <Row className="text-white">
              <Col className="col-8">
                <strong className="fs-3">About</strong>
                <p className="text-secondary w-75">
                  Add some information about the album below, the author, or any other background context. Make it a few
                  sentences long so folks can pick up some informative tidbits. Then, link them off to some social
                  networking sites or contact information.
                </p>
              </Col>
              <Col className="col-4">
                <strong className="fs-3">Contact</strong>
                <ul className="list-unstyled">
                  <li>
                    <a href="#" className="text-white text-decoration-none">
                      Follow on Twitter
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-white text-decoration-none">
                      Like on Facebook
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-white text-decoration-none">
                      Email me
                    </a>
                  </li>
                </ul>
              </Col>
            </Row>
          </Container>
        </div>
        <Navbar variant="dark" className="bg-dark">
          <Container>
            <Navbar.Brand href="#home">
              <i class="bi bi-camera"></i> <strong>Album</strong>
            </Navbar.Brand>
            <Navbar.Toggle className="d-block" data-bs-toggle="collapse" data-bs-target="#infos" />
          </Container>
        </Navbar>
      </header>
    );
  }
}
export default MyHeader;
