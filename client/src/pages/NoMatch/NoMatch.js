import React from "react";
import { Col, Row, Container } from "../../components/Grid";
import "./NoMatch.css"

const NoMatch = () => (
  <Container fluid>
    <Row>
      <Col size="md-12">
          <h1 id="errortitle">404 Page Not Found</h1>
          <h1 id="emoji">
            <span role="img" aria-label="Face With Rolling Eyes Emoji">
              🙄
            </span>
          </h1>
          <a id="errortitle" href="/"><h6>Go back to main page</h6></a>
      </Col>
    </Row>
  </Container>
);

export default NoMatch;
