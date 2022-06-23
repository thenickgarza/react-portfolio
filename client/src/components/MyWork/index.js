import React from "react";
import Card from 'react-bootstrap/Card'
import Button from "react-bootstrap/Button";
// import ngLogo from '../../assets/images/ngLogo.png'
import SmartHome from '../../assets/images/Smart-Home.png'
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";

function MyWork() {

    return (
      <Container className="myWorkContainer">
        <Row>
        <Col>
      <Card className="card" style={{ width: '18rem' }}>
      <Card.Img variant="top" src={SmartHome} />
      <Card.Body>
        <Card.Title>SmartHome</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the bulk of
          the card's content.
        </Card.Text>
        <Button variant="primary">Live Url</Button>
        <Button variant="primary">View Github</Button>
      </Card.Body>
    </Card>
    </Col>
    
    <Col>
    <Card className="card" style={{ width: '18rem' }}>
      {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
      <Card.Body>
        <Card.Title>Custom Homepage</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the bulk of
          the card's content.
        </Card.Text>
        <Button variant="primary">Live Url</Button>
        <Button variant="primary">View Github</Button>
      </Card.Body>
    </Card>
    </Col>
    <Col>
    <Card className="card" style={{ width: '18rem' }}>
      {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
      <Card.Body>
        <Card.Title>Weather App</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the bulk of
          the card's content.
        </Card.Text>
        <Button variant="primary">Live Url</Button>
        <Button variant="primary">View Github</Button>
      </Card.Body>
    </Card>
    </Col>
    <Col>
    <Card className="card" style={{ width: '18rem' }}>
      {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
      <Card.Body>
        <Card.Title>Weather App</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the bulk of
          the card's content.
        </Card.Text>
        <Button variant="primary">Live Url</Button>
        <Button variant="primary">View Github</Button>
      </Card.Body>
    </Card>
    </Col>
    <Col>
    </Col>
    </Row>
    </Container>
    )
};

export default MyWork;