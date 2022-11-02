import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Button, Col, Image, Row, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";
import useFirebase from "../../hooks/useFirebase";
import "./Services.css";

const Services = () => {
  const { user } = useFirebase();
  const [services, setServices] = useState([]);

  console.log(services);
  useEffect(() => {
    fetch("https://stark-hamlet-27159.herokuapp.com/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  /* console.log(services) */

  /* const handleAddToOrder = (index) => {
        console.log(services[index])
        const data = services[index];
        data.email = user.email;
        fetch("http://localhost:5000/addOrder", {
            method: "POST",
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        })
    } */
  return (
    <div className=" service-style mt-5 ">
      <div className="container ">
        <div style={{ textAlign: "center" }}>
          <p className="pt-5">Choose Your Package</p>
          <h2 className="mb-4">
            Select Your Best Package <br /> For Your Travel
          </h2>
        </div>

        <Row style={{ paddingBottom: "20px" }}>
          {services.map((service) => (
            <Col style={{ marginTop: "20px" }} md={4} xs={12}>
              <Stack
                gap={2}
                style={{
                  backgroundColor: "white",
                  padding: "10px",
                  borderRadius: "10px",
                }}
              >
                <Image src={service.img} style={{ height: "250px" }} fluid />
                <div>
                  <h5>${service.price}/Per Person</h5>
                  <p>5 Days/6 night</p>
                </div>

                <h4>{service.name}</h4>
                <p>{service.description} </p>
                <Link to={`/booknow/${service._id}`}>
                  <Button
                    variant="outline-secondary"
                    /* onClick={() => handleAddToOrder(index)}  */
                  >
                    Read More{" "}
                  </Button>
                </Link>
              </Stack>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default Services;
