import React from "react";
import { Col, Container, Row, Stack } from "react-bootstrap";

const TopReview = () => {
  return (
    <Container style={{ marginTop: "70px" }}>
      <div style={{ textAlign: "center" }}>
        <span>Review & Testimenial</span>
        <h2>Top Review For Treker</h2>
      </div>

      <Row style={{ marginTop: "40px" }}>
        <Col md={3} xs={12}>
          <Stack
            gap={2}
            style={{
              border: "1px solid black",
              padding: "10px",
              marginBottom: "10px",
              borderRadius: "5px",
              textAlign: "center",
            }}
          >
            <img
              src="https://mdbcdn.b-cdn.net/img/new/avatars/5.webp"
              class="rounded-3"
              style={{ width: "50px", margin: "auto" }}
              alt="Avatar"
            />
            <h5>Laboni Khatun</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis,
              beatae? Exercitationem quasi dolorem repudiandae quas.
            </p>
          </Stack>
        </Col>
        <Col md={3} xs={12}>
          <Stack
            gap={2}
            style={{
              border: "1px solid black",
              padding: "10px",
              marginBottom: "10px",
              borderRadius: "5px",
              textAlign: "center",
            }}
          >
            <img
              src="https://mdbcdn.b-cdn.net/img/new/avatars/5.webp"
              class="rounded-3"
              style={{ width: "50px", margin: "auto" }}
              alt="Avatar"
            />
            <h5>Sumaya Khatun</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis,
              beatae? Exercitationem quasi dolorem repudiandae quas.
            </p>
          </Stack>
        </Col>
        <Col md={3} xs={12}>
          <Stack
            gap={2}
            style={{
              border: "1px solid black",
              padding: "10px",
              marginBottom: "10px",
              borderRadius: "5px",
              textAlign: "center",
            }}
          >
            <img
              src="https://mdbcdn.b-cdn.net/img/new/avatars/5.webp"
              class="rounded-3"
              style={{ width: "50px", margin: "auto" }}
              alt="Avatar"
            />
            <h5>Ruksana Khatun</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis,
              beatae? Exercitationem quasi dolorem repudiandae quas.
            </p>
          </Stack>
        </Col>
        <Col md={3} xs={12}>
          <Stack
            gap={2}
            style={{
              border: "1px solid black",
              padding: "10px",
              marginBottom: "10px",
              borderRadius: "5px",
              textAlign: "center",
            }}
          >
            <img
              src="https://mdbcdn.b-cdn.net/img/new/avatars/5.webp"
              class="rounded-3"
              style={{ width: "50px", margin: "auto" }}
              alt="Avatar"
            />
            <h5>Bolkis Khatun</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis,
              beatae? Exercitationem quasi dolorem repudiandae quas.
            </p>
          </Stack>
        </Col>
      </Row>
    </Container>
  );
};

export default TopReview;
