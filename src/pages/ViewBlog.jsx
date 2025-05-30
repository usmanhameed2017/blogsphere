import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchSingleBlogs } from '../api/blogs';
import { Container, Row, Col } from 'react-bootstrap';
import { getTime } from '../utils/getTime';
import CommentSection from '../components/commentSection';

function ViewBlog() 
{
    const { id } = useParams();
    const [blog, setBlog] = useState(null);

    useEffect(() => {
        fetchSingleBlogs(id)
        .then(response => setBlog(response))
        .catch(error => console.log(error));
    },[]);
    console.log(blog);

    return (
        <div className="blog-container">
            <Container>
                <Row>
                    <Col>
                        {/* Hero Section */}
                        <section className="home-hero" style={{ backgroundColor: '#1e1f26', color: 'white', padding: '4rem 2rem', textAlign: 'center' }}>
                            <h1>{ blog?.title } </h1>
                            <p> { blog?.description } </p>
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
                            height={200} 
                            width={200}
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
                                src={ blog?.createdBy.profile_image } 
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
                        <span> <strong> 👍 { blog?.totalLikes }  likes </strong> </span>
                    </Col>
                </Row>

                {/* Total comments */}
                <Row>
                    <Col>
                        <span> <strong> 💬 { blog?.totalComments }  comments </strong> </span>
                    </Col>
                </Row>

                {/* Comment section */}
                <div>
                    <h1 className='superHeading text-center'> COMMENT SECTION </h1>
                </div>
                {
                    blog?.comments && blog?.comments.length > 0 ?
                    <CommentSection comments={blog?.comments} />
                    :
                    <section className='home-hero'>
                        <h2> No Comments </h2>
                    </section>
                }
                
            </Container>
        </div>
    );
}

export default ViewBlog;