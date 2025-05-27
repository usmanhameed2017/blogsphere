import React from 'react';
import { Container, Row, Col, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

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
                                    <Nav.Link> <Link to={`/`}>  Home </Link> </Nav.Link>
                                    <Nav.Link> <Link to={`/about`}> About </Link> </Nav.Link>
                                    <Nav.Link> <Link to={`/contact`}> Contact </Link> </Nav.Link>
                                    <Nav.Link> <Link to={`/privacy`}> Privacy </Link> </Nav.Link>
                                </Nav>

                                {/* Navbar Text - Search Field */}
                                <Navbar.Text> 
                                    <Nav.Link> <Link to={`/contact`}> Signin/Signup </Link> </Nav.Link>
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