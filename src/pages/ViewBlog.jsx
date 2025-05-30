import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchSingleBlogs } from '../api/blogs';
import { Container, Row, Col } from 'react-bootstrap';

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
                <hr />
                <Row>
                    <Col>
                        <span> Created by: <strong> { blog?.createdBy?.name } </strong> </span>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <span> 👍 { blog?.totalLikes } <strong> likes </strong> </span>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <span> 💬 { blog?.totalComments } <strong> comments </strong> </span>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default ViewBlog;