import React, { useState } from 'react';
import { forgotPasswordValidation } from '../../validation/user';
import FormBS from '../../components/form';
import { Form, Field, ErrorMessage } from 'formik';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { backendURL } from '../../../constants';
import { ApiResponse } from '../../utils/ApiResponse';
import { ApiError } from '../../utils/ApiError';

function ForgotPassword() 
{
    const [isLoading, setLoading] = useState(false);

    return (
        <div className='form-container'>
            <Container>
                <Row>
                    <Col className='mx-auto'>
                        {/* Forgot password */}
                        <FormBS initialValues={{ email:'' }} validationSchema={forgotPasswordValidation} 
                        handlerFunction={ async (values, action) => {
                            try 
                            {
                                setLoading(true);
                                const response = await axios.post(`${backendURL}/user/forgotPassword`, values);
                                action.resetForm();
                                setLoading(false);
                                alert(ApiResponse(response).message);
                            } 
                            catch (error) 
                            {
                                setLoading(false);
                                alert(ApiError(error).message);
                            }                            
                        }}>
                            <Form>
                                {/* Email */}
                                <div className="form-group">
                                    <label htmlFor="email"> Email </label>
                                    <Field type='text' name='email' className='form-control' placeholder="Enter email" />
                                    <span className="text-danger"> <ErrorMessage name="email" /> </span>
                                </div>   

                                <div className="form-group">
                                    <Link className="text-info" style={{ cursor:"pointer" }} to='/login'> Back to login! </Link>
                                </div>

                                <Button type="submit" className="custom-btn w-100 mt-3" disabled={isLoading === true}> Submit </Button>                      
                            </Form>
                        </FormBS>                                                       
                    </Col>
                </Row>
            </Container>           
        </div>
    );
}

export default ForgotPassword;