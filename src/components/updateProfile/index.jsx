import React from 'react'
import FormBS from '../form';
import { Form, Field, ErrorMessage } from 'formik';
import { getUser } from '../../../constants';
import { Button } from 'react-bootstrap';
import { updateUserValidation } from '../../validation/user';
import { updateUserInfo } from '../../api/user';

function UpdateProfile() 
{
    const user = getUser();

    // Form initial values
    const initialValues = {
        fname: user?.fname || "",
        lname: user?.lname || "",
        age: user?.age || "",
        gender: user?.gender || "",
        email: user?.email || "",
        username: user?.username || "",
        profile_image: ""
    };

    return (
        <>
            <h1 className='fw-bold superHeading text-center mb-5' style={{ marginTop:"100px" }}> UPDATE INFO </h1>
            <FormBS initialValues={initialValues} validationSchema={updateUserValidation} handlerFunction={updateUserInfo}>
            {
                ({ setFieldValue }) => (
                    <Form>
                        {/* First Name */}
                        <div className="form-group">
                            <label> First Name </label>
                            <Field type="text" name="fname" className="form-control" placeholder="Enter first name" />
                            <span className='text-danger'> <ErrorMessage name="fname" /> </span>
                        </div>

                        {/* Last Name */}
                        <div className="form-group">
                            <label> Last Name </label>
                            <Field type="text" name="lname" className="form-control" placeholder="Enter last name" />
                            <span className='text-danger'> <ErrorMessage name="lname" /> </span>
                        </div>     

                        {/* Age */}
                        <div className="form-group">
                            <label> Age </label>
                            <Field type="number" name="age" className="form-control" placeholder="Enter age" />
                            <span className='text-danger'> <ErrorMessage name="age" /> </span>
                        </div>   

                        {/* Gender */}
                        <div className="form-group">
                            <label> Gender </label>
                            <Field as="select" name="gender" className="form-control">
                                <option value=""> Select </option>
                                <option value="Male"> Male </option>
                                <option value="Female"> Female </option>
                            </Field>
                            <span className='text-danger'> <ErrorMessage name="gender" /> </span>
                        </div>    

                        {/* Email */}
                        <div className="form-group">
                            <label> Email </label>
                            <Field type="text" name="email" className="form-control" placeholder="Enter email" />
                            <span className='text-danger'> <ErrorMessage name="email" /> </span>
                        </div>

                        {/* Username */}
                        <div className="form-group">
                            <label> Username </label>
                            <Field type="text" name="username" className="form-control" placeholder="Enter username" />
                            <span className='text-danger'> <ErrorMessage name="username" /> </span>
                        </div>      

                        {/* Profile Image */}
                        <div className="form-group">
                            <label> Profile Image </label>
                            <input type="file" name="profile_image" className="form-control"
                            onChange={ (e) => setFieldValue('profile_image', e.target.files[0]) } />
                            <span className='text-danger'> <ErrorMessage name="profile_image" /> </span>
                        </div>

                        <Button type='submit' className='themeBtn'> Update </Button>                                                                                                                              
                    </Form>
                )
            }
            </FormBS>
        </>
    );
}

export default UpdateProfile;