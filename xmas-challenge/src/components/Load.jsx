import { Component } from "react";
import { Button, Col, Container, FormControl, FormGroup, Modal, Row } from "react-bootstrap";

import MyCard from "./MyCard";
import NotLoadedState from "./NotLoadedState";
import Details from "./Details";

class Load extends Component {
  state = {
    isLoaded: false,
    isPrimary: false,
    isSecondary: false,
    images: [],
    selectedImg: null,
    viewImg: null,
    show: false,
  };

  loadPrimaryImages = async () => {
    if (!this.state.isPrimary) {
      const response = await this.fetchData("nature");
      if (response.ok) {
        const { photos } = await response.json();
        this.setState({ isLoaded: true });
        this.setState({ isPrimary: true });
        this.setState({ isSecondary: false });
        this.setState({ images: photos });
      }
    }
  };
  loadSecondaryImages = async () => {
    if (!this.state.isSecondary) {
      const response = await this.fetchData("people");

      if (response.ok) {
        const { photos } = await response.json();
        this.setState({ isLoaded: true });
        this.setState({ isPrimary: false });
        this.setState({ isSecondary: true });
        this.setState({ images: photos });
      }
    }
  };
  searchByValue = async (event) => {
    const response = await this.fetchData(event.target.value);
    if (response.ok) {
      const { photos } = await response.json();
      this.setState({ isLoaded: true });
      this.setState({ isPrimary: false });
      this.setState({ isSecondary: false });
      this.setState({ images: photos });
    }
  };
  showCard = (photoId) => {
    const selectedImg = this.state.images.find((image) => image.id === photoId);

    this.setState({ selectedImg });
  };
  goBack = () => {
    this.setState({ selectedImg: null });
  };
  openImg = (image) => {
    this.setState({ viewImg: image });
    this.setState({ show: true });
  };
  hideModal = (boolean) => {
    this.setState({ show: false });
  };
  fetchData = async (query) => {
    const response = await fetch(`https://api.pexels.com/v1/search?query=${query}`, {
      method: "GET",
      headers: {
        Authorization: "zDn1f4TRovLbhzn2v2fx583o5xTZIjqenbfmpRlWSRr1DCDS30jJR7Jw",
      },
    });

    return response;
  };
  render() {
    return (
      <>
        {this.state.viewImg && (
          <Modal
            show={this.state.show}
            onHide={() => this.hideModal()}
            dialogClassName="modal-90w"
            aria-labelledby="example-custom-modal-styling-title"
          >
            <Modal.Body>
              <div>
                <img src={this.state.viewImg} alt="" />
              </div>
            </Modal.Body>
          </Modal>
        )}
        {this.state.selectedImg && (
          <Details
            id={this.state.selectedImg.id}
            ph={this.state.selectedImg.photographer}
            title={this.state.selectedImg.alt}
            url={this.state.selectedImg.photographer_url}
            img={this.state.selectedImg.src.large}
            avgColor={this.state.selectedImg.avg_color}
            goBack={this.goBack}
          />
        )}
        {!this.state.selectedImg && (
          <>
            <div className="text-center" key={"hero"}>
              <Container className="py-5">
                <h1 className="display-6">Album API example</h1>
                <p className="text-secondary fs-5">
                  This page will dynamically load pictures from the web, and display them in a cool way!
                </p>
                <div className="d-flex align-items-baseline justify-content-center mb-4">
                  <Button className="rounded-1 me-1" onClick={() => this.loadPrimaryImages()}>
                    Load Images
                  </Button>
                  <Button variant="secondary" className="rounded-1" onClick={() => this.loadSecondaryImages()}>
                    Load Secondary Images
                  </Button>
                </div>
                <FormGroup className="d-flex justify-content-center" controlId="searchForm">
                  <FormControl
                    placeholder="Or search for photos"
                    style={{ maxWidth: "400px" }}
                    onChange={(event) => this.searchByValue(event)}
                  />
                </FormGroup>
              </Container>
            </div>
            <div key={"notLoaded"}>{!this.state.isLoaded && <NotLoadedState />}</div>
            <div key={"loaded"}>
              {this.state.isLoaded && (
                <Container fluid className="bg-light p-5">
                  <Container>
                    <Row xs={1} md={2} lg={3} className="g-3">
                      {this.state.images.map((photo) => {
                        return (
                          <Col>
                            <MyCard
                              key={photo.id}
                              id={photo.id}
                              ph={photo.photographer}
                              text={photo.alt}
                              image={photo.src.medium}
                              largeImage={photo.src.large}
                              showCard={this.showCard}
                              openImg={this.openImg}
                            />
                          </Col>
                        );
                      })}
                    </Row>
                  </Container>
                </Container>
              )}
            </div>
          </>
        )}
      </>
    );
  }
}
export default Load;
