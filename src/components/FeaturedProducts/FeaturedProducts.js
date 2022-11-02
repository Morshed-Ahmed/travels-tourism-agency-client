import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Col, Container, Image, Row, Stack } from "react-bootstrap";

const FeaturedProducts = () => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    fetch("/featuredProducts.json")
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);
  return (
    <Container>
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <span>Shop New</span>
        <h2>Featured Trekking Products</h2>
      </div>

      <Row className="mt-4">
        {product.map((pt) => (
          <Col md={3} className="mt-4">
            <Stack gap={2} style={{ backgroundColor: "azure", padding: "5px" }}>
              <Image style={{ height: "250px" }} src={pt.image} fluid />
              <h5>{pt?.title}</h5>
              <span>${pt?.price}</span>
            </Stack>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default FeaturedProducts;
