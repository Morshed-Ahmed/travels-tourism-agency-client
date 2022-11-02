import React from "react";
import "./FormCard.css";
import { useForm } from "react-hook-form";
import { Col, Container, Form, Row, Stack } from "react-bootstrap";

const FormCard = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <Container
      style={{
        backgroundColor: "#2F4E46",
        borderRadius: "10px",
        marginTop: "20px",
      }}
    >
      <Stack style={{ padding: "20px" }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Row>
            <Col md={4} className="mb-3 mt-3">
              <Form.Control
                size="lg"
                type="text"
                {...register("firstName", { required: true })}
                placeholder="Where To..."
              />
            </Col>
            <Col md={4} className="mb-3 mt-3">
              <Form.Control
                size="lg"
                type="date"
                {...register("firstName", { required: true })}
                placeholder="Large text"
              />
            </Col>
            <Col md={4} className="mb-3 mt-3">
              <Form.Control
                size="lg"
                type="text"
                {...register("firstName", { required: true })}
                placeholder="Travel Type"
              />
            </Col>
          </Row>
        </form>
      </Stack>

      {/* <form
        style={{ margin: "auto" }}
        className="form-style"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          {...register("firstName", { required: true, maxLength: 20 })}
          placeholder="Where To..."
        />
        <input
          {...register("lastName", { pattern: /^[A-Za-z]+$/i })}
          placeholder="10/30/2021"
        />

        <input type="number" {...register("age")} placeholder="Travel Type" />
        <input type="Submit" />
      </form> */}
    </Container>
  );
};

export default FormCard;
