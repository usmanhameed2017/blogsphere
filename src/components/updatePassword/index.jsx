import React from 'react'
import FormBS from '../form';
import { Form, Field, ErrorMessage } from 'formik';
import { Button } from 'react-bootstrap';
import { updatePasswordValidation } from '../../validation/user';
import { updatePassword } from '../../api/user';

function UpdatePassword() 
{
    const initialValues = {
        oldPassword:"",
        newPassword:"",
        confirmPassword:""
    };

    return (
        <>
            <h1 className='fw-bold superHeading text-center mb-5' style={{ marginTop:"100px" }}> UPDATE PASS </h1>
            <FormBS initialValues={initialValues} validationSchema={updatePasswordValidation} handlerFunction={updatePassword}>
            {
                <Form>
                    {/* Old Password */}
                    <div className="form-group">
                        <label> Old Password </label>
                        <Field type="password" name="oldPassword" className="form-control" placeholder="Enter old password" />
                        <span className='text-danger'> <ErrorMessage name="oldPassword" /> </span>
                    </div>

                    {/* New Password */}
                    <div className="form-group">
                        <label> Password </label>
                        <Field type="password" name="newPassword" className="form-control" placeholder="Enter new password" />
                        <span className='text-danger'> <ErrorMessage name="newPassword" /> </span>
                    </div>

                    {/* Confirm Password */}
                    <div className="form-group">
                        <label> Confirm Password </label>
                        <Field type="password" name="confirmPassword" className="form-control" placeholder="Re-enter Password" />
                        <span className='text-danger'> <ErrorMessage name="confirmPassword" /> </span>
                    </div>                              

                    <Button type='submit' className='themeBtn'> Update </Button>                                                                                                                              
                </Form>
            }
            </FormBS>
        </>
    );
}

export default UpdatePassword;