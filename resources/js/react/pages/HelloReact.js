import React from "react";
import ReactDOM from "react-dom";

import LandingPages from "../components/landing-pages/LandingPages";
import { Col, Row } from "reactstrap";

const HelloReact = () => {
    return (
        <Row>
            <Col sm="12">
                <LandingPages />
            </Col>
        </Row>
    );
};
export default HelloReact;
if (document.getElementById("hello-react")) {
    ReactDOM.render(<HelloReact />, document.getElementById("hello-react"));
}
