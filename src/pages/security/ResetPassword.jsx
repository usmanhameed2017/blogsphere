import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { backendURL } from '../../../constants';
import { ApiResponse } from '../../utils/ApiResponse';
import { ApiError } from '../../utils/ApiError';
import { resetPasswordValidation } from '../../validation/user';
import { Button, Col, Container, Row } from 'react-bootstrap';
import FormBS from '../../components/form';
import { Form, Field, ErrorMessage } from 'formik';
import { showError, showSuccess } from '../../utils/toasterMessage';

function ResetPassword() 
{
    const { code } = useParams();
    const [isValid, setValid] = useState(null);
    const [id, setId] = useState(null);
    const [userId, setUserId] = useState(null);
    const [isLoading, setLoading] = useState(false);
    const navigate = useNavigate();

    // Verify reset link
    const verifyResetLink = useCallback(async () => {
        try 
        {
            const response = await axios.get(`${backendURL}/user/security/verifyResetLink/${code}`);
            return ApiResponse(response);
        } 
        catch (error) 
        {
            return ApiError(error);
        }
    },[]);

    useEffect(() => {
        verifyResetLink()
        .then(response => {
            console.log(response.data);
            setValid(response.data.success);
            setId(response.data?._id);
            setUserId(response.data?.userId);
        })
        .catch(error => {
            setValid(false);
        });
    },[]);

    if(isValid === null) return "";
    if(isValid === false) return <Navigate to="/login" />

    return (
        <div className='form-container'>
            <Container>
                <Row>
                    <Col className='mx-auto'>
                        {/* Forgot password */}
                        <FormBS initialValues={{ _id:id, userId:userId, newPassword:"", confirmPassword:"" }} validationSchema={resetPasswordValidation} 
                        handlerFunction={ async (values, action) => {
                            try 
                            {
                                setLoading(true);
                                const response = await axios.patch(`${backendURL}/user/security/resetPassword`, values);
                                action.resetForm();
                                setLoading(false);
                                showSuccess(ApiResponse(response).message);
                                navigate("/login");
                            } 
                            catch (error) 
                            {
                                setLoading(false);
                                showError(ApiError(error).message);
                            }                            
                        }}>
                            <Form>
                                {/* ID - Hidden */}
                                <Field type='hidden' name='_id' />  

                                {/* User ID - Hidden */}
                                <Field type='hidden' name='userId' />                                 

                                {/* New Password */}
                                <div className="form-group">
                                    <label htmlFor="newPassword"> New Password </label>
                                    <Field type='password' name='newPassword' className='form-control' placeholder="Enter password" />
                                    <span className="text-danger"> <ErrorMessage name="newPassword" /> </span>
                                </div>   

                                {/* Confirm Password */}
                                <div className="form-group">
                                    <label htmlFor="confirmPassword"> Confirm Password </label>
                                    <Field type='password' name='confirmPassword' className='form-control' placeholder="Re-enter password" />
                                    <span className="text-danger"> <ErrorMessage name="confirmPassword" /> </span>
                                </div> 

                                <Button type="submit" className="custom-btn w-100 mt-3" disabled={isLoading === true}> Submit </Button>                      
                            </Form>
                        </FormBS>                                                       
                    </Col>
                </Row>
            </Container>           
        </div>
    )
}

export default ResetPassword;