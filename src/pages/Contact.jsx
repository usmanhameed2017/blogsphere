import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import FormBS from '../components/form';
import { Form, Field, ErrorMessage } from 'formik';
import { contactFormValidation } from '../validation/contact';
import axios from 'axios';
import { backendURL } from '../../constants';
import { ApiResponse } from '../utils/ApiResponse';
import { ApiError } from '../utils/ApiError';

function Contact() 
{
    const [isLoading, setLoading] = useState(false);
    const initialValues = {
        name:"",
        email:"",
        message:""
    };

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
                    <FormBS initialValues={initialValues} validationSchema={contactFormValidation}
                    handlerFunction={ async (values, action) => {
                        try
                        {
                            setLoading(true);
                            const response = await axios.post(`${backendURL}/user/contact`, values);
                            alert(ApiResponse(response).message);
                            action.resetForm();
                            setLoading(false);
                        }
                        catch(error)
                        {
                            alert(ApiError(error).message);
                            setLoading(false);
                        }
                    } }
                    >
                        <Form className="contact-form">
                            <h2>Contact Us</h2>
                            <p>We're here to assist you! Reach out anytime!</p>

                            {/* Full Name */}
                            <div className="form-group mb-2">
                                <label> Your Name </label>
                                <Field type="text" name="name" className="form-control" placeholder="Enter your name" />
                                <span className='text-danger'> <ErrorMessage name='name' /> </span>
                            </div>

                            {/* Email */}
                            <div className="form-group mb-2">
                                <label>Email</label>
                                <Field type="email" name="email" className="form-control" placeholder="Enter your email" />
                                <span className='text-danger'> <ErrorMessage name='email' /> </span>
                            </div>

                            <div className="form-group mb-2">
                                <label>Message</label>
                                <Field as="textarea" name="message" rows={4} className="form-control" placeholder="Write your message" />
                                <span className='text-danger'> <ErrorMessage name='message' /> </span>
                            </div>

                            <Button variant="primary" type="submit" className="custom-btn" disabled={isLoading}> Send Message </Button>
                        </Form>
                    </FormBS>
                </div>
            </div>            
        </div>
    );
}

export default Contact;