import React from 'react';
import { Container, Form, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useFirebase from '../../hooks/useFirebase';
import './Header.css'

const Header = () => {
    const { handleLogout, user } = useFirebase();
    return (
        <div>
            <Navbar /* fixed="top" */ bg="light" expand="lg">
                <Container fluid>
                    <Navbar.Brand href="#"><img className="img-fluid w-75" src={'https://i.ibb.co/k4gS9Lq/download.png'} alt="" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto  my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link as={HashLink} to="/home">Home</Nav.Link>


                            <Nav.Link as={HashLink} to="/myOrder">My Order</Nav.Link>
                            <Nav.Link as={HashLink} to="/allOrder">All Order</Nav.Link>
                            <Nav.Link as={HashLink} to="/addService">Add Service</Nav.Link>


                        </Nav>
                        <Form className="d-flex">


                            {user.email ? <Nav.Link onClick={handleLogout} className="text-dark" as={Link} to="/home">Logout</Nav.Link>
                                :
                                <Nav.Link className="text-dark" as={Link} to="/login">Login</Nav.Link>}
                            <Nav.Link className="me-5 text-dark" as={Link} to="/home">User: {user.email} </Nav.Link>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;