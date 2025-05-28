import React from 'react';
import { Container, Row, Col, Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { FaLock } from "react-icons/fa"; // Font Awesome Lock icon

function NavbarBS()
{
    return(
        <Container fluid>
            <Row>
                <Col>

                    {/* Navbar Started */}
                    <Navbar bg='dark' variant='dark' expand='sm ' fixed='top' style={{ backgroundColor:'#1e1f26' }}>

                        {/* Container */}
                        <Container fluid>

                            {/* Navbar Brand */}
                            <Navbar.Brand>
                                <img src='logo.png' height={40} width={40} className='align-top rounded-circle'  /> &nbsp;
                            </Navbar.Brand>

                            {/* Toggle */}
                            <Navbar.Toggle aria-controls='my-nav' />

                            {/* Collapse */}
                            <Navbar.Collapse id='my-nav'>

                                {/* Nav */}
                                <Nav className='me-auto fw-bold'>
                                    {/* Links */}
                                    <NavLink to={`/`}>  Home </NavLink>
                                    <NavLink to={`/about`}> About </NavLink>
                                    <NavLink to={`/contact`}> Contact </NavLink>
                                    <NavLink to={`/privacy`}> Privacy </NavLink>
                                </Nav>

                                {/* Navbar Text - Search Field */}
                                <Navbar.Text>
                                    <NavLink to="/login" className="signin-link"> <FaLock style={{ marginRight: "5px" }} /> Signin / Signup
                                    </NavLink>
                                </Navbar.Text>

                            </Navbar.Collapse>
                        </Container>

                    </Navbar>
                    {/* Navbar Ended */}

                </Col>
            </Row>
        </Container>
    );
}

export default NavbarBS;