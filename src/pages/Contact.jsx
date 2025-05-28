import React from 'react';
import { Form, Button } from 'react-bootstrap';

function Contact() 
{
    return (
        <div>
            {/* Hero Section */}
            <section className="home-hero" style={{ backgroundColor: '#1e1f26', color: 'white', padding: '4rem 2rem', textAlign: 'center' }}>
                <h1>Contact Us</h1>
                <p>We're here to assist you! Reach out to us anytime, and we'll get back to you promptly.</p>
            </section>

            {/* Professional Info Section */}
            <section className="home-hero" style={{ padding: '3rem 2rem', textAlign: 'center' }}>
                <h1>How Can We Help?</h1>
                <p>
                    Whether you're an avid reader, a passionate writer, or just someone who loves to share ideas, our blogging community is here to support and inspire you.
                    questions about our platform, need help starting your own blog, or just want to connect with fellow bloggers? We're here to help!
                </p>
            </section>

            {/* Divider */}
            <div className="section-divider">Get in Touch</div>

            {/* Contact us form section */}
            <div className="contact-fullscreen">
                {/* Left Side - Image */}
                <div className="contact-left">
                    <img src="contactus.jpg" alt="Contact" className="contact-image" />
                </div>

                {/* Right Side - Form */}
                <div className="contact-right">
                    <Form className="contact-form">
                        <h2>Contact Us</h2>
                        <p>We're here to assist you! Reach out anytime!</p>

                        <Form.Group className="mb-3" controlId="formName">
                            <Form.Label>Your Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter your name" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formEmail">
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control type="email" placeholder="Enter your email" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formMessage">
                            <Form.Label>Message</Form.Label>
                            <Form.Control as="textarea" rows={4} placeholder="Write your message" />
                        </Form.Group>

                        <Button variant="primary" type="submit" className="custom-btn"> Send Message </Button>
                    </Form>
                </div>
            </div>            
        </div>
    );
}

export default Contact;