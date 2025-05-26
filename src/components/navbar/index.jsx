import React from 'react';
import { Container, Row, Col, Navbar, Nav, NavDropdown } from 'react-bootstrap';

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
                                    <Nav.Link href='/'> Home </Nav.Link>
                                    <Nav.Link href='/about'> About </Nav.Link>

                                    {/* Dropdown */}
                                    <NavDropdown title='Services' id='my-nav'>
                                        <NavDropdown.Header> Heading 1 </NavDropdown.Header>
                                        <NavDropdown.Item> Service 1 </NavDropdown.Item>
                                        <NavDropdown.Item> Service 2 </NavDropdown.Item>
                                        <NavDropdown.Divider />

                                        <NavDropdown.Header> Heading 2 </NavDropdown.Header>
                                        <NavDropdown.Item> Service 3 </NavDropdown.Item>
                                        <NavDropdown.Item> Service 4 </NavDropdown.Item>
                                        <NavDropdown.Divider />

                                        <NavDropdown.Header> Heading 3 </NavDropdown.Header>
                                        <NavDropdown.Item> Service 5 </NavDropdown.Item>
                                        <NavDropdown.Item> Service 6 </NavDropdown.Item>
                                        <NavDropdown.Item> Service 7 </NavDropdown.Item>
                                    </NavDropdown>

                                    {/* Links */}
                                    <Nav.Link href='/privacy'> Privacy </Nav.Link>
                                    <Nav.Link href='/contact'> Contact </Nav.Link>
                                </Nav>

                                {/* Navbar Text - Search Field */}
                                <Navbar.Text> 
                                    <input type="search" className='form-control' placeholder='Search' /> 
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