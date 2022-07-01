import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
// import ngLogo from '../../assets/images/ngLogo.png'
import SmartHome from "../../assets/images/Smart-Home.png";
import AuctionHouse from "../../assets/images/AuctionHouse.png";
import Homepage from "../../assets/images/Homepage.png";
import WeatherApp from "../../assets/images/WeatherApp.png";
import { motion } from 'framer-motion'

function MyWork() {
  return (
    <motion.section
    initial={{opacity:0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}
    >
      <h2
        style={{ textAlign: "center", color: "#cfcfcf", paddingBottom: "50px" }}
      >
        {" "}
        My Projects{" "}
      </h2>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
        }}
      >
        <Card className="card" style={{ width: "18rem" }}>
          <Card.Img variant="top" src={SmartHome} />
          <Card.Body>
            <Card.Title>SmartHome</Card.Title>
            <Card.Text>
              SmartHome is a project built with React and GraphQL as the
              database. The site was made to provide "smart home" services to
              customers while creating jobs for providers.
            </Card.Text>
            <Button
              href="https://young-earth-27956.herokuapp.com/"
              style={{ backgroundColor: "#4da167" }}
            >
              Live Url
            </Button>
            <Button
              href="https://github.com/thenickgarza/smart-home"
              style={{ backgroundColor: "#4da167" }}
            >
              View Code
            </Button>
          </Card.Body>
        </Card>

        <Card className="card" style={{ width: "18rem" }}>
          <Card.Img variant="top" src={Homepage} />
          <Card.Body>
            <Card.Title>Custom Homepage</Card.Title>
            <Card.Text>
              This custom browser homepage was built using HTML, CSS, and
              JavaScript. It utilizes the built in fetch in JS to make muiltiple
              calls to various API's to recieve data based on your prefences in
              the settins menu.
            </Card.Text>
            <Button
              href="https://thenickgarza.github.io/Browser-Landing-Page/"
              style={{ backgroundColor: "#4da167" }}
            >
              Live Url
            </Button>
            <Button
              href="https://github.com/thenickgarza/RavenclawG-2"
              style={{ backgroundColor: "#4da167" }}
            >
              View Code
            </Button>
          </Card.Body>
        </Card>

        <Card className="card" style={{ width: "18rem" }}>
          <Card.Img variant="top" src={AuctionHouse} />
          <Card.Body>
            <Card.Title>Auction House</Card.Title>
            <Card.Text>
              Auction House is a auction house built using HTML, CSS,
              JavaScript, Node.js, MySQl, and Handlebars. Users are able to
              signup/login, sell products, and bid on various items.
            </Card.Text>
            <Button
              href="https://stormy-fjord-57144.herokuapp.com/"
              style={{ backgroundColor: "#4da167" }}
            >
              Live Url
            </Button>
            <Button
              href="https://github.com/thenickgarza/auction-house"
              style={{ backgroundColor: "#4da167" }}
            >
              View Code
            </Button>
          </Card.Body>
        </Card>

        <Card className="card" style={{ width: "18rem" }}>
          <Card.Img variant="top" src={WeatherApp} />
          <Card.Body>
            <Card.Title>Weather App</Card.Title>
            <Card.Text>
              This weather app uses HTML, CSS, and JavaScript's built in fetch
              to make an api call to gather weather data for the city searched.
            </Card.Text>
            <Button
              href="https://thenickgarza.github.io/Weather-Dashboard/"
              style={{ backgroundColor: "#4da167" }}
            >
              Live Url
            </Button>
            <Button
              href="https://github.com/thenickgarza/Weather-Dashboard"
              style={{ backgroundColor: "#4da167" }}
            >
              View Code
            </Button>
          </Card.Body>
        </Card>
      </div>
    </motion.section>
  );
}

export default MyWork;
