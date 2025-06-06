import React, { useState } from 'react';
import { axiosOptions, backendURL, getUser } from '../../../constants';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { FaRegEdit, FaPenNib } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import FormBS from '../form';
import { ErrorMessage, Field, Form } from 'formik';
import { addBlog } from '../../validation/blog';
import axios from 'axios';
import { ApiResponse } from '../../utils/ApiResponse';
import { ApiError } from '../../utils/ApiError';
import { showError, showSuccess } from '../../utils/toasterMessage';

function UserProfile({ setReloadBlog }) 
{
    const user = getUser();
    const profile_image = user.profile_image || "/public/default-avatar.webp";
    const [isUpload, setUpload] = useState(false);
    const [isLoading, setLoading] = useState(false);

    // Blog initial values
    const initialValues = {
        title:"",
        description:"",
        coverImage:"",
        images:""
    };

    return (
        <>
            <div className="profile-container" style={{ paddingTop: '120px'}}>

                {/* Profile Image & Info */}
                <div className="profile-info" style={{ display: 'flex', alignItems: 'center', padding: '0 20px' }}>
                    <img src={profile_image} alt="Profile"
                        style={{
                            width: '150px',
                            height: '150px',
                            borderRadius: '50%',
                            border: '4px solid white',
                            objectFit: 'cover'
                        }} />

                    <div style={{ marginLeft: '20px' }}>
                        <h1 style={{ margin: 0 }}>{user.fname}</h1>
                        <p style={{ margin: 0, color: 'gray' }}>{ user.username }</p>
                    </div>
                </div>

                {/* Bio or other details (optional) */}
                <div className="profile-bio" style={{ padding: '20px' }}>
                    <Container>
                    {
                        !isUpload ? 
                        (
                            // Buttons
                            <Row>
                                
                                {/* Publish blog */}
                                <Col md="2">
                                    <Button className='themeBtn' style={{ width:"200px" }} onClick={ () => setUpload(true) }>
                                        <FaPenNib /> Publish blog
                                    </Button>                                 
                                </Col>

                                {/* Update info */}
                                <Col>
                                    <Button className='themeBtn' style={{ width:"200px" }}>
                                        <Link to="/user/settings"> <FaRegEdit /> Update info </Link>
                                    </Button>
                                </Col>                                
                            </Row>                            
                        )
                        :
                        (
                            // Uplaod blog
                            <Row>
                                <Col>
                                    <FormBS initialValues={initialValues} validationSchema={addBlog}
                                    handlerFunction={ async (values, action) => {
                                        try
                                        {
                                            setLoading(true);
                                            let formData = new FormData(); // Make form data for multiple files
                                            Object.entries(values).forEach(([key, value]) => {
                                                if(key === "images" && Array.isArray(value)) 
                                                {
                                                    value.forEach((file) => {
                                                        formData.append("images", file);
                                                    });
                                                } 
                                                else 
                                                {
                                                    formData.append(key, value);
                                                }
                                            });
                                            
                                            const response = await axios.post(`${backendURL}/blog`, formData, axiosOptions);
                                            showSuccess(ApiResponse(response).message);
                                            action.resetForm();
                                            setUpload(false);
                                            setReloadBlog(prev => prev + 1);
                                            setLoading(false);
                                        }
                                        catch(error)
                                        {
                                            showError(ApiError(error).message);
                                        }
                                    } }
                                    >
                                    {
                                        ({ setFieldValue }) => (
                                            <Form>
                                                {/* Cover Image */}
                                                <div className="form-group">
                                                    <label> Cover Image </label>
                                                    <input type="file" name="title" className='form-control' accept="image/*" 
                                                    onChange={ (e) => setFieldValue('coverImage', e.target.files[0]) } />
                                                    <span className='text-danger'> <ErrorMessage name='coverImage' /> </span>
                                                </div>
                                            
                                                {/* Title */}
                                                <div className="form-group">
                                                    <label> Title </label>
                                                    <Field type="text" name="title" className='form-control' placeholder='Enter title' />
                                                    <span className='text-danger'> <ErrorMessage name='title' /> </span>
                                                </div>      

                                                {/* Description */}
                                                <div className="form-group">
                                                    <label> Description </label>
                                                    <Field as="textarea" name="description" rows="10" className='form-control' placeholder='Enter description' />
                                                    <span className='text-danger'> <ErrorMessage name='description' /> </span>
                                                </div> 

                                                {/* Content Images */}
                                                <div className="form-group">
                                                    <label> Content Images </label>
                                                    <input type="file" name="images" className='form-control' accept="image/*" multiple 
                                                    onChange={ (e) => setFieldValue('images', Array.from(e.target.files)) } />
                                                    <span className='text-danger'> <ErrorMessage name='images' /> </span>
                                                </div>                                                

                                                <div className="form-group">
                                                    <Button type='submit' className='themeBtn' disabled={isLoading}> Submit </Button>
                                                    <Button type='submit' className='themeBtn mx-2' onClick={ () => setUpload(false) }
                                                    disabled={isLoading}> Cancel </Button>
                                                </div>                                                                                                                                              
                                            </Form>
                                        )
                                    }
                                    </FormBS>
                                </Col>
                            </Row>
                        )
                    }
                        <Row>
                            <Col>
                                <hr />
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>  
        </>
    );
}

export default UserProfile;