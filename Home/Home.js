import React from "react";
import { Carousel, Button, Card, CardGroup } from "react-bootstrap";
import Footer from "../Footer/Footer";
import { useHistory } from "react-router-dom";

export default function Home() {
  const history = useHistory();

  function handleClick() {
    history.push("/about");
  }

  return (
    <div>
      <br />
      <Carousel>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src="https://aighospitals.com/wp-content/uploads/2021/06/Redefining-Healthcare-standards-in-India.jpg"
            alt="First slide"
          />
          <Carousel.Caption style={{ padding: " 0px 700px 50px 0px" }}>
            <h4 style={{ color: "white", fontWeight: "800" }}>
              Asian Institute of Gastroenterology, is officially recognized as
              one of the only 17 hospitals in the world as a Centre of
              Excellence for Gastroenterology.
            </h4>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img
            src="https://aighospitals.com/wp-content/uploads/2021/06/the-care-you-need-close-to-home.jpg"
            className="d-block w-100"
            alt="Second slide"
          />
          <Carousel.Caption style={{ padding: " 0px 700px 88.2px 0px" }}>
            <Button variant="primary" onClick={handleClick}>
              Know More
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src="https://aighospitals.com/wp-content/uploads/2021/06/The-Week-award-AIG-Hospital.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>

      <CardGroup>
        <div style={{ padding: "4rem  7.5rem" }}>
          <Card style={{ width: "25rem" }}>
            <center>
              <Card.Title style={{ padding: "1rem 0" }}>OVERVIEW</Card.Title>
            </center>
            <Card.Img
              variant="top"
              src="https://aighospitals.com/wp-content/uploads/2021/06/Overview.jpg"
            />
            <Card.Body>
              <Card.Text>
                Asian Institute of Gastroenterology, is officially recognized as
                one of the only 17 hospitals in the world as a Centre of
                Excellence for Gastroenterology - A rare distinction for any
                hospital, placing it ahead of many other outstanding medical
                institutions in the world. AIG Hospitals is an integrated
                healthcare system.
              </Card.Text>
              <center>
                <Button variant="primary">Know More</Button>
              </center>
            </Card.Body>
          </Card>
        </div>
        <div style={{ padding: "4rem  7.5rem" }}>
          <Card style={{ width: "25rem" }}>
            <center>
              <Card.Title style={{ padding: "1rem 0" }}>OUR DOCTOR</Card.Title>
            </center>
            <Card.Img
              variant="top"
              src="https://t4.ftcdn.net/jpg/00/68/85/39/240_F_68853921_P5xTDmjlLF0jecPgrHbPWUJvSnflDcrS.jpg"
            />
            <Card.Body>
              <Card.Text>
                AIG Hospitals has been equipped with world-class technologies
                and facilities to ensure the highest quality of services to the
                patients and their loved ones. With patients from over 20
                countries, it has set new benchmarks internationally for
                performing the most complex procedures with utmost success. Led
                by Dr. D Nageshwar Reddy.
              </Card.Text>
              <center>
                <Button variant="primary">Know More</Button>
              </center>
            </Card.Body>
          </Card>
        </div>
      </CardGroup>

      <Footer />
    </div>
  );
}
