import React from "react";
import { Col, Container, Image, Row, Stack } from "react-bootstrap";
import "./AboutUs.css";
import aboutImage from "../../Images/pexels-claiton-conto-5619202.jpg";

const AboutUs = () => {
  return (
    <Container>
      <Row className="mt-3">
        <Col md={6} sm={12} xs={12}>
          <Stack
            className="p-md-5 p-xs-2 mt-xs-4 mt-xs-0"
            gap={2}
            style={{
              justifyContent: "center",
              // alignItems: "center",
              height: "100%",
            }}
          >
            <h3>About Travel</h3>
            <h2>World Best Travel Agency</h2>
            <p>
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
              pariatur labore fuga quo officia perferendis, sapiente eius
              tenetur ipsam! Nobis
            </p>

            <Row
              style={{
                backgroundColor: "#f9f4f4",
                padding: "10px",
                borderRadius: "5px",
              }}
            >
              <Col md={6}>
                <Stack gap={2}>
                  <span> Ratione valuptatem.sequi nesciunt</span>
                  <span>Ratione valuptatem</span>
                  <span>Ratione valuptatem sequi </span>
                </Stack>
              </Col>
              <Col md={6}>
                <video
                  style={{ width: "200px" }}
                  type="video/mp4"
                  src="https://www.w3schools.com/css/mov_bbb.mp4"
                  controls
                ></video>
              </Col>
            </Row>
          </Stack>
        </Col>
        <Col md={6} sm={12} xs={12}>
          <Stack>
            <Image className="p-md-5 p-xs-2 " src={aboutImage} fluid />
          </Stack>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutUs;
