import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchSingleBlog } from '../api/blogs';
import { Container, Row, Col } from 'react-bootstrap';
import { getTime } from '../utils/getTime';
import CommentSection from '../components/commentSection';
import { ApiResponse } from '../utils/ApiResponse';
import { ApiError } from '../utils/ApiError';
import { axiosOptions, backendURL } from '../../constants';
import axios from 'axios';
import { FaThumbsUp, FaRegThumbsUp, FaCommentDots } from 'react-icons/fa';
import { likeOnBlog } from '../api/like';


function ViewBlog() 
{
    const { id } = useParams();
    const [blog, setBlog] = useState(null);
    const [text, setText] = useState('');
    const [reloadComments, setReloadComments] = useState(0);

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

    useEffect(() => {
        fetchSingleBlog(id)
        .then(response => setBlog(response))
        .catch(error => console.log(error));
    },[reloadComments, likeOnBlog]);
    console.log(blog);

    return (
        <div className="blog-container">
            <Container>
                <Row>
                    <Col>
                        {/* Hero Section */}
                        <section className="home-hero" style={{ backgroundColor: '#1e1f26', color: 'white', padding: '4rem 2rem' }}>
                            <h1>{ blog?.title } </h1>
                        </section>
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