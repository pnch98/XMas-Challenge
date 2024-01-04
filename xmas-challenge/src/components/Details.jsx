import { Button } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";

const Details = (props) => {
  return (
    <div
      className="d-flex flex-column align-items-center justify-content-center position-relative"
      style={{ backgroundColor: props.avgColor, height: "100vh" }}
    >
      <Button variant="transparent" className="position-absolute start-0 ms-5" onClick={() => props.goBack()}>
        <i className="bi bi-arrow-left-circle fs-2 text-white" style={{ textShadow: "0px 0px 3px black" }}></i>
      </Button>
      <div className="d-flex flex-column align-items-start ">
        <a href={props.url} target="_blank" rel="noreferrer" className="text-decoration-none">
          <h1 className="display-6 mt-2 mb-3 text-white" style={{ textShadow: "0px 0px 5px black" }}>
            {props.ph}
          </h1>
        </a>
        <img src={props.img} alt={props.title} className="mb-2" />
      </div>
      <h2 style={{ textShadow: "0px 0px 2px black", color: "white" }}>{props.title}</h2>
    </div>
  );
};
export default Details;
