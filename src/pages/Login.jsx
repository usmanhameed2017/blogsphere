import React, { useState } from "react";
import { Tabs, Tab, Button, Alert } from "react-bootstrap";
import { Form, Field, ErrorMessage } from 'formik';
import FormBS from "../components/form";
import { loginInitialValues } from "../schema/user";
import { loginValidation } from "../validation/user";
import { useAuth } from "../context/auth";

function Login() 
{
    const { userLogin } = useAuth();
    return (
        <div
        style={{
            maxWidth: "500px",
            margin: "3rem auto",
            marginTop:'200px',
            backgroundColor: "#2a2b33",
            padding: "2rem",
            borderRadius: "15px",
            boxShadow: "0 4px 15px rgba(0, 194, 203, 0.5)",
        }} >

        <Tabs
        defaultActiveKey="Signin"
        id="uncontrolled-tab-example"
        className="mb-3">

            {/* Signin */}
            <Tab eventKey="Signin" title="Signin">
                <FormBS initialValues={loginInitialValues} validationSchema={loginValidation} handlerFunction={userLogin}>
                    <Form>
                        {/* Username */}
                        <div className="form-group">
                            <label htmlFor="username"> Username </label>
                            <Field type='text' name='username' className='form-control' placeholder="Enter Name" />
                            <span className="text-danger"> <ErrorMessage name="username" /> </span>
                        </div>

                        {/* Password */}
                        <div className="form-group">
                            <label htmlFor="password"> Password </label>
                            <Field type='password' name='password' className='form-control' placeholder="Enter Password" />
                            <span className="text-danger"> <ErrorMessage name="password" /> </span>
                        </div>   

                        <Button type="submit" className="custom-btn w-100 mt-3">Sign In</Button>                         
                    </Form>
                </FormBS>    
            </Tab>

            {/* Signup */}
            <Tab eventKey="Signup" title="Signup">

            </Tab>
        </Tabs>
        </div>
    );
}

export default Login;