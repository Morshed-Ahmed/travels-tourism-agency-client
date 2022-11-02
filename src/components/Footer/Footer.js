import React from "react";
import { Col, Container, Image, Row, Stack } from "react-bootstrap";
import "./Footer.css";

const Footer = () => {
  return (
    <div style={{ backgroundColor: "#262339", color: "white" }}>
      <Container style={{ padding: "20px" }}>
        <Row style={{ marginTop: "30px" }}>
          <Col md={6} xs={12}>
            <Stack gap={3}>
              <Image
                style={{ width: "100px", backgroundColor: "white" }}
                fluid
                src={"https://i.ibb.co/k4gS9Lq/download.png"}
                alt=""
              />
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Aliquid maxime aut ut voluptate dolorum nisi ducimus ratione
              </p>
            </Stack>
          </Col>
          <Col md={3} xs={12}>
            <Stack gap={2}>
              <h4>Contact Us</h4>
              <small>
                +01852-1265122 <br />
                +01852-1265122
              </small>
              <small>
                info@example.com <br /> support@example.com
              </small>
              <small>2752 Willison Street Eagan, United State</small>
            </Stack>
          </Col>
          <Col md={3} xs={12}>
            <Stack gap={2}>
              <h4>Support</h4>
              <small>Contact Us</small>
              <small>About Us</small>
              <small>Destinations</small>
              <small>Our Blogs</small>
              <small>Package</small>
            </Stack>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
