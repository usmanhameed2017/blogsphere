import React, { useState } from "react";
import { Tabs, Tab, Form, Button, Alert } from "react-bootstrap";

function Login() 
{
    const [error, setError] = useState("");
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
                <Form className="text-white">
                    {error && <Alert variant="danger"> {error} </Alert>}

                    {/* Email */}
                    <Form.Group className="mb-3" controlId="signinEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name="email" placeholder="Enter Email" />
                    </Form.Group>

                    {/* Password */}
                    <Form.Group className="mb-3" controlId="signinPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name="password" placeholder="Enter Password" />
                    </Form.Group>

                    <Button type="submit" className="custom-btn w-100"> Sign In </Button>
                </Form>
            </Tab>

            {/* Signup */}
            <Tab eventKey="Signup" title="Signup">
                <Form className="text-white">
                    {error && <Alert variant="danger">{error}</Alert>}

                    {/* First Name */}
                    <Form.Group className="mb-3" controlId="signupFName">
                        <Form.Label> First Name </Form.Label>
                        <Form.Control type="text" name="fname" placeholder="Enter First Name" />
                    </Form.Group>

                    {/* Last Name */}
                    <Form.Group className="mb-3" controlId="signupFName">
                        <Form.Label> Last Name </Form.Label>
                        <Form.Control type="text" name="lname" placeholder="Enter Last Name" />
                    </Form.Group>   

                    {/* Age */}
                    <Form.Group className="mb-3" controlId="signupFName">
                        <Form.Label> Age </Form.Label>
                        <Form.Control type="number" name="age" placeholder="Enter Age" />
                    </Form.Group>   

                    {/* Gender */}
                    <Form.Group className="mb-3" controlId="signupFName">
                        <Form.Label> Gender </Form.Label>
                        <Form.Control type="number" name="gender" placeholder="Enter Gender" />
                    </Form.Group>                                              

                    {/* Email */}
                    <Form.Group className="mb-3" controlId="signupFName">
                        <Form.Label> Email </Form.Label>
                        <Form.Control type="text" name="email" placeholder="Enter Email" />
                    </Form.Group>

                    {/* Username */}
                    <Form.Group className="mb-3" controlId="signupFName">
                        <Form.Label> Username </Form.Label>
                        <Form.Control type="text" name="username" placeholder="Enter Username" />
                    </Form.Group>                

                    {/* Password */}
                    <Form.Group className="mb-3" controlId="signupFName">
                        <Form.Label> Password </Form.Label>
                        <Form.Control type="password" name="password" placeholder="Enter Password" />
                    </Form.Group>

                    {/* Confirm Password */}
                    <Form.Group className="mb-3" controlId="signupFName">
                        <Form.Label> Confirm Password </Form.Label>
                        <Form.Control type="password" name="cpassword" placeholder="Re-Enter Password" />
                    </Form.Group>

                    <Button type="submit" className="custom-btn w-100"> Sign Up </Button>
                </Form>
            </Tab>
        </Tabs>
        </div>
    );
}

export default Login;