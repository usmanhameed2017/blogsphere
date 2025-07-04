import React, { useState } from 'react';
import { Container, Row, Col, Navbar, Nav, Dropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { FaLock, FaChevronDown, FaUserCircle, FaSignOutAlt, FaCog } from "react-icons/fa";
import { useAuth } from '../../context/auth';
import { getUser } from '../../../constants';

function NavbarBS() {
    const { userLogout } = useAuth();
    const [showDropdown, setShowDropdown] = useState(false);
    const toggleDropdown = () => setShowDropdown(!showDropdown);
    
    const user = getUser();
    const profile_image = user?.profile_image || '/default-avatar.webp';

    return (
        <Container fluid>
            <Row>
                <Col>
                    <Navbar bg='dark' variant='dark' expand='sm' fixed='top' style={{ backgroundColor:'#1e1f26' }}>
                        <Container fluid>
                            <Navbar.Brand>
                                <img src='/logo.png' height={40} width={40} className='align-top rounded-circle' /> &nbsp;
                            </Navbar.Brand>

                            <Navbar.Toggle aria-controls='my-nav' />
                            <Navbar.Collapse id='my-nav'>
                                <Nav className='me-auto fw-bold'>
                                    <NavLink to={`/`}> Home </NavLink>
                                    <NavLink to={`/about`}> About </NavLink>
                                    <NavLink to={`/contact`}> Contact </NavLink>
                                    {
                                        user && (
                                            <NavLink to={`/blogs`}> Blogs </NavLink>
                                        )
                                    }
                                    <NavLink to={`/privacy`}> Privacy </NavLink>
                                </Nav>

                                <Navbar.Text>
                                    {
                                        user ? (
                                            <div className="user-dropdown" onClick={toggleDropdown}>
                                                <img src={ profile_image } alt={ profile_image } className="profile-img" />
                                                <span className="user-name">{ user?.fname }</span>
                                                <FaChevronDown className="dropdown-icon" />
                                                {
                                                    showDropdown && (
                                                        <div className="dropdown-menu-custom">
                                                            <NavLink to="/user/profile"> <FaUserCircle /> Profile </NavLink>
                                                            <NavLink to="/user/settings"> <FaCog /> Settings </NavLink>
                                                            <NavLink onClick={ userLogout }> <FaSignOutAlt /> Logout </NavLink>
                                                        </div>
                                                    )
                                                }
                                            </div>
                                        ) 
                                        : 
                                        (
                                            <NavLink to="/login" className="signin-link">
                                                <FaLock style={{ marginRight: "5px" }} /> Signin / Signup
                                            </NavLink>
                                        )
                                    }
                                </Navbar.Text>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </Col>
            </Row>
        </Container>
    );
}

export default NavbarBS;