import React from "react";
import Card from 'react-bootstrap/Card'
import Button from "react-bootstrap/Button";
import ngLogo from '../../assets/images/ngLogo.png'


function MyWork() {

    return (
      <div className="row">
        <div className="column">
      <Card className="card" style={{ width: '18rem' }}>
      <Card.Img variant="top" src={ngLogo} />
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
    </div>
    <div className="column">
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
    </div>
    <div className="column">
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
    </div>
    </div>
    )
};

export default MyWork;