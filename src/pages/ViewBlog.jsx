import React, { useCallback, useEffect, useState } from 'react';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import { fetchSingleBlog } from '../api/blogs';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { getTime } from '../utils/getTime';
import CommentSection from '../components/commentSection';
import { ApiResponse } from '../utils/ApiResponse';
import { ApiError } from '../utils/ApiError';
import { axiosOptions, backendURL, getUser } from '../../constants';
import axios from 'axios';
import { FaThumbsUp, FaRegThumbsUp, FaCommentDots, FaEdit, FaTrash } from 'react-icons/fa';
import { likeOnBlog } from '../api/like';
import FormBS from '../components/form';
import { Form, Field, ErrorMessage } from 'formik';
import { addBlog } from '../validation/blog';


function ViewBlog() 
{
    const { id } = useParams();
    const [blog, setBlog] = useState(null);
    const [text, setText] = useState('');
    const [reloadComments, setReloadComments] = useState(0);
    const [isEditable, setEditable] = useState(false);
    const [isloading, setLoading] = useState(false);

    const navigate = useNavigate();

    const user = getUser();

    // Add comment on blog
    const addCommentOnBlog = useCallback(async (e) => {
        e.preventDefault();
        try 
        {
            const response = await axios.post(`${backendURL}/comment/blog`, { text:text, blogID:id }, axiosOptions);
            setReloadComments((prev) => prev + 1);
            setText('');
            alert(ApiResponse(response).message);
        } 
        catch (error) 
        {
            alert(ApiError(error).message);
        }
    },[text]);

    // Fetch blog on page load
    useEffect(() => {
        fetchSingleBlog(id)
        .then(response => setBlog(response))
        .catch(error => console.log(error));
    },[reloadComments, likeOnBlog]);
    // console.log(blog);

    // Delete blog
    const deleteBlog = useCallback(async (id) => {
        if(window.confirm("Are you sure you want to delete this blog?"))
        {
            try 
            {
                const response = await axios.delete(`${backendURL}/blog/${id}`, axiosOptions);
                alert(ApiResponse(response).message);
                navigate("/user/profile");
            } 
            catch (error) 
            {
                alert(ApiError(error).message);
            }
        }
    },[]);

    return (
        <div className="blog-container">
            <Container>

                {/* Icons */}
                {
                    user?._id === blog?.createdBy?._id && !isEditable ? (
                        <Row style={{ marginTop:"100px" }}>
                            <Col 
                            // Break points
                            xs={{ size:"2", offset:"10" }} 
                            sm={{ size:"3", offset:"9" }} 
                            md={{ size:"1", offset:"11" }} 
                            lg={{ size:"1", offset:"11" }}>
                                <div style={{ whiteSpace:"nowrap" }}>
                                    {/* Edit Blog */}
                                    <FaEdit className='icon' size={25} onClick={ () => setEditable(true) } /> &nbsp;
                                    {/* Delete Blog */}
                                    <FaTrash className='icon' size={20} onClick={ () => deleteBlog(blog?._id) } />                                    
                                </div>
                            </Col>
                        </Row>                        
                    )
                    :
                    (
                        <div style={{ marginTop:'100px' }}></div> // For spacing
                    )
                }

                {
                    // Editable Blog
                    isEditable ? 
                    (
                        <div>
                            <Row>
                                <Col>
                                    <FormBS 
                                    initialValues={{ title:blog?.title, description:blog?.description, coverImage:"" }}
                                    validationSchema={addBlog}
                                    handlerFunction={ async (values) => {
                                        try
                                        {
                                            setLoading(true);
                                            const response = await axios.patch(`${backendURL}/blog/${blog?._id}`, values, 
                                            { ...axiosOptions, headers:{ "Content-Type":"multipart/form-data" }  });
                                            setEditable(false);
                                            setReloadComments(reloadComments + 1);
                                            alert(ApiResponse(response).message);
                                            setLoading(false);
                                        }
                                        catch(error)
                                        {
                                            alert(ApiError(error).message);
                                            setLoading(false);
                                        }
                                    }} >

                                    {
                                        ({ setFieldValue }) => (
                                            <Form>
                                                {/* Title */}
                                                <div className="form-group">
                                                    <label> Title </label>
                                                    <Field type="text" name="title" className="form-control" placeholder="Enter title" />
                                                    <span className='text-danger'> <ErrorMessage name='title' /> </span>
                                                </div>

                                                {/* Description */}
                                                <div className="form-group">
                                                    <label> Description </label>
                                                    <Field as="textarea" name="description" rows="10" className="form-control" placeholder="Enter description" />
                                                    <span className='text-danger'> <ErrorMessage name='description' /> </span>
                                                </div>    

                                                {/* Cover Image */}
                                                <div className="form-group">
                                                    <label> Cover Image </label>
                                                    <input type='file' name="coverImage" className="form-control" accept="image/*"
                                                    onChange={ (e) => setFieldValue('coverImage', e.target.files[0]) } />
                                                    <span className='text-danger'> <ErrorMessage name='coverImage' /> </span>
                                                </div>

                                                <div className="form-group mt-2">
                                                    <Button type='submit' variant='success' disabled={isloading}> Save </Button>
                                                    <Button variant='secondary' className='ms-2' onClick={ () => setEditable(false) }> Cancel </Button> 
                                                </div>                                                                                               
                                            </Form>
                                        )
                                    }                                        
                                    </FormBS>
                                </Col>
                            </Row>
                        </div>
                    ) 
                    : 
                    (
                        // Blog
                        <div>
                            <Row>
                                <Col>
                                    {/* Blog Title */}
                                    <h1 className='superHeading text-center'>{ blog?.title } </h1>

                                    {/* Blog Description */}
                                    <section>
                                        <p className='blog-para'> { blog?.description } </p>
                                    </section>
                                </Col>
                            </Row>

                            <div className='contentImages'>
                            {
                                blog?.images && blog?.images?.length > 0 && (
                                    blog?.images?.map(image => (
                                        <img key={image}
                                        src={image} 
                                        alt={image} 
                                        height={400} 
                                        width={400}
                                        className='contentImage' />
                                    ))
                                )
                            }
                            </div>
                        </div>
                    )
                }

                <hr />

                {/* Created By */}
                <Row>
                    <Col>
                        <span> 
                            <h5> 
                                Published by: &nbsp;
                                <img 
                                src={ blog?.createdBy?.profile_image } 
                                alt="profile_image" height={30} 
                                width={30} 
                                className='rounded-circle' /> &nbsp;  { blog?.createdBy?.name } 

                                &nbsp;  (<small> { getTime(blog?.createdAt) } </small>)
                            </h5> 
                        </span>
                    </Col>
                </Row>

                {/* Total likes */}
                <Row>
                    <Col>
                        <span> 
                        {/* Conditional rendering for likes */}
                        { 
                            blog?.isLiked ? 
                            (
                                <FaThumbsUp 
                                style={{ color: '#00c2cb', cursor: 'pointer' }} 
                                size={24} 
                                title='Dislike'
                                onClick={ () => likeOnBlog(id)
                                    .then(() => setReloadComments(prev => prev + 1)) 
                                    .catch(error => console.log(error)) } />
                            ) 
                            : 
                            (
                                <FaRegThumbsUp 
                                style={{ color: 'gray', cursor: 'pointer' }} 
                                size={24} 
                                title='Like'
                                onClick={ () => likeOnBlog(id)
                                    .then(() => setReloadComments(prev => prev + 1)) 
                                    .catch(error => console.log(error)) } />
                            )
                        }
                        &nbsp; <strong> { blog?.totalLikes } likes </strong>
                        </span>
                    </Col>
                </Row>

                {/* Total comments */}
                <Row className='mt-1'>
                    <Col>
                        <span>
                            <FaCommentDots size={24} />
                            &nbsp; <strong> { blog?.totalComments } comments </strong> 
                        </span>
                        <hr />
                    </Col>
                </Row>

                {/* Comment section */}
                <Row>
                    <Col>
                        <div>
                            <h1 className='superHeading text-center'> COMMENT SECTION </h1>
                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col>
                    {
                        blog?.comments && blog?.comments.length > 0 ?
                        <CommentSection comments={blog?.comments} setReloadComments={setReloadComments} />
                        :
                        <section className='home-hero'>
                            <h2> No Comments </h2>
                        </section>
                    }
                    </Col>
                </Row>

                {/* Comment Box */}
                <Row className='mt-3'>
                    <Col md="4" sm="12" xs="12" lg="4">
                        <form method="post" onSubmit={addCommentOnBlog}>
                            <div className="form-group mb-3">
                                <input type="text" name="comment" className='form-control' placeholder='Enter Comment'
                                value={text} onChange={ (e) => setText(e.target.value) } required />
                            </div>

                            <button className="custom-btn btn btn-primary"> Add Comment </button>
                        </form>
                    </Col>
                </Row>
                <hr />
            </Container>
        </div>
    );
}

export default ViewBlog;