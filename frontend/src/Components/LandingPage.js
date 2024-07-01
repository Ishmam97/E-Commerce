import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Form,
  FormControl,
} from "react-bootstrap";
import "./css/landingPage.css";
const LandingPage = () => {
  const SHOES = [
    {
      id: "shoe1",
      title: "Casual Shoes",
      image: `${process.env.PUBLIC_URL}/shoe1.jpeg`,
      text: "Comfortable and stylish, perfect for everyday wear.",
      buttonLabel: "Discover More",
    },
    {
      id: "shoe2",
      title: "Sports Shoes",
      image: `${process.env.PUBLIC_URL}/shoe2.jpg`,
      text: "Designed for performance and comfort.",
      buttonLabel: "Discover More",
    },
    {
      id: "shoe3",
      title: "Formal Shoes",
      image: `${process.env.PUBLIC_URL}/shoe3.jpg`,
      text: "Elegant and stylish, perfect for formal occasions.",
      buttonLabel: "Discover More",
    },
  ];

  return (
    <div>
      <Container
        fluid
        className="hero-section d-flex justify-content-center align-items-center"
        style={{
          background: `url(${process.env.PUBLIC_URL}/hero-image.jpg) no-repeat center center`,
          backgroundSize: "cover",
          height: "60vh",
        }}
      >
        <Row className="align-items-center hero-text">
          <Col className="text-center text-black">
            <h1 className="mt-3 font-weight-bold">
              Discover the perfect blend of comfort and style
            </h1>
            <Button variant="light" className="my-3">
              Shop Now
            </Button>
          </Col>
        </Row>
      </Container>

      <Container className="my-5 collections">
        <Row>
          <Col>
            <h2 className="mb-5 mt-3">Our Collections</h2>
            <p className="mb-5">
              Explore our diverse range of shoes, each thoughtfully designed to
              cater to your needs and style preferences.
            </p>
          </Col>
        </Row>
        <Row className="card-deck">
          {SHOES.map((shoe) => (
            <Col md={4} key={shoe.id}>
              <Card>
                <Card.Img variant="top" src={shoe.image} />
                <Card.Body>
                  <Card.Title>{shoe.title}</Card.Title>
                  <Card.Text>{shoe.text}</Card.Text>
                  <Button variant="primary">{shoe.buttonLabel}</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      <Container fluid className="py-5 why">
        <Row>
          <Col className="text-center">
            <h2>Why Choose Our Shoes?</h2>
          </Col>
        </Row>
        <Row className="why-text">
          <Col md={3} className="text-center">
            <i className="bi bi-award" style={{ fontSize: "2rem" }}></i>
            <h4>High Quality</h4>
            <p>
              We ensure the highest quality standards in every pair of shoes.
            </p>
          </Col>
          <Col md={3} className="text-center">
            <i className="bi bi-recycle" style={{ fontSize: "2rem" }}></i>
            <h4>Sustainable</h4>
            <p>Our products are made with eco-friendly materials.</p>
          </Col>
          <Col md={3} className="text-center">
            <i className="bi bi-box-seam" style={{ fontSize: "2rem" }}></i>
            <h4>Timeless Design</h4>
            <p>
              Our designs are timeless, versatile, and perfect for any occasion.
            </p>
          </Col>
          <Col md={3} className="text-center">
            <i className="bi bi-heart" style={{ fontSize: "2rem" }}></i>
            <h4>Support Artisans</h4>
            <p>
              By choosing our shoes, you support skilled artisans and their
              craft.
            </p>
          </Col>
        </Row>
      </Container>

      <Container className="my-5 popular">
        <Row className="mt-5 mb-5"> 
          <Col>
            <h2 className="mb-5">Our Popular Collection</h2>
            <p className="mt-3 mb-5">
              Explore our diverse range of shoes, each thoughtfully designed to
              cater to your needs and style preferences.
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={3}>
            <Card>
              <Card.Img variant="top" src="/path/to/popular-shoe1.jpg" />
              <Card.Body>
                <Card.Title>Popular Shoe #1</Card.Title>
                <Card.Text>$99.00</Card.Text>
                <Button variant="primary">Buy Now</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card>
              <Card.Img variant="top" src="/path/to/popular-shoe2.jpg" />
              <Card.Body>
                <Card.Title>Popular Shoe #2</Card.Title>
                <Card.Text>$120.00</Card.Text>
                <Button variant="primary">Buy Now</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card>
              <Card.Img variant="top" src="/path/to/popular-shoe3.jpg" />
              <Card.Body>
                <Card.Title>Popular Shoe #3</Card.Title>
                <Card.Text>$89.00</Card.Text>
                <Button variant="primary">Buy Now</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card>
              <Card.Img variant="top" src="/path/to/popular-shoe4.jpg" />
              <Card.Body>
                <Card.Title>Popular Shoe #4</Card.Title>
                <Card.Text>$75.00</Card.Text>
                <Button variant="primary">Buy Now</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <footer className="bg-dark text-white py-4">
        <Container>
          <Row>
            <Col md={6}>
              <p>&copy; 2024 ShoeStore. All rights reserved.</p>
            </Col>
            <Col md={6} className="text-right">
              <Form inline>
                <FormControl
                  type="text"
                  placeholder="Subscribe to our newsletter"
                  className="mr-sm-2"
                />
                <Button variant="outline-light">Subscribe</Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
};

export default LandingPage;
