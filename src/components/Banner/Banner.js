import React from "react";
import { Button, Col, Container, Image, Row, Stack } from "react-bootstrap";
import Header from "../Header/Header";
import "./Banner.css";
import bannerImage from "../../Images/pexels-roman-odintsov-4553618.jpg";

const Banner = () => {
  return (
    <div>
      <Header />
      <Container>
        <Row className="mt-3">
          <Col md={6} sm={12} xs={12}>
            <Stack>
              <Image className="p-md-5 p-xs-2" src={bannerImage} fluid />
            </Stack>
          </Col>
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
              <h3>Plan your the best</h3>
              <h1 style={{}}>Traveling</h1>
              <p>
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deleniti pariatur labore fuga quo officia perferendis, sapiente
                eius tenetur ipsam! Nobis
              </p>
              <Button style={{ width: "50%" }}>View All Tours</Button>
            </Stack>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Banner;
