import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Footer() 
{
    const mailLink = "https://mail.google.com/mail/u/0/#inbox?compose=CllgCJlLWRkCnHRRgQprwTgKwhjqgzflrRDCWThMpQTHbXMtTNQlZjjBQFlPQfNFwkBvPpxclTL";
    return (
        <footer className="footer-section">
            <Container>
                <Row>
                    {/* About Section */}
                    <Col md={3} sm={6} className="mb-4">
                        <h5>About Blogsphere</h5>
                        <p> Blogsphere is your go-to platform for insightful articles, trending stories, and engaging content. Stay updated and inspired! </p>
                    </Col>

                    {/* Quick Links */}
                    <Col md={3} sm={6} className="mb-4">
                        <h5>Quick Links</h5>
                        <ul className="list-unstyled">
                            <li> <Link to={`/`}> Home  </Link> </li>
                            <li> <Link to={`/about`}> About </Link> </li>
                            <li> <Link to={`/blog`}> Blogs </Link> </li>
                            <li> <Link to={`/contact`}> Contact  </Link></li>
                            <li><a href="#">Privacy Policy</a></li>
                        </ul>
                    </Col>

                    {/* Social Media Links */}
                    <Col md={3} sm={6} className="mb-4">
                        <h5>Follow Us</h5>
                        <div className="social-icons">
                            <a href="#"><FaFacebookF /></a>
                            <a href="#"><FaTwitter /></a>
                            <a href="#"><FaInstagram /></a>
                            <a href="#"><FaLinkedin /></a>
                            <a href={mailLink} target='blank'> <FaEnvelope /> </a>
                        </div>
                    </Col>

                    {/* Newsletter */}
                    <Col md={3} sm={6} className="mb-4">
                        <h5>Subscribe</h5>
                        <p>Get the latest posts and updates directly in your inbox.</p>
                        <Form className="d-flex">
                        <Form.Control type="email" placeholder="Your email" className="me-2" />
                        <Button variant="info">Subscribe</Button>
                        </Form>
                    </Col>
                </Row>

                <hr className="footer-divider" />

                <Row>
                    <Col className="text-center">
                        <p>&copy; {new Date().getFullYear()} Blogsphere. All rights reserved.</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;