import React, { useEffect, useState } from 'react'
import Hero from '../components/hero';
import CardBS from '../components/card';
import { fetchRecentBlogs } from '../api/blogs';
import About from './About';
import Contact from './Contact';
import { Col, Container, Row } from 'react-bootstrap';

function Home() 
{
    const [blogs, setBlogs] = useState(null);

    useEffect(() => {
        fetchRecentBlogs()
        .then(response => setBlogs(response))
        .catch(error => console.log(error));
    },[]);

    console.log("Recent Blogs:", blogs);
    
    return (
        <div>
            {/* Hero section */}
            <Hero />

            {/* Stylish Divider */}
            <div className="section-divider">
                Top Recent Blogs
            </div>

            {/* Container For Blog Cards */}
            <Container className="mt-4">
                {/* Blog Cards Row */}
                <Row>
                    {
                        blogs && blogs?.length > 0 ? blogs?.map(blog => (
                            <Col key={blog._id} xs={12} sm={6} md={4} lg={3} className="d-flex justify-content-center mb-4">
                                <CardBS 
                                    _id={blog._id}
                                    coverImage={blog.coverImage || `default-blog-title-image.jpeg`}
                                    title={blog.title}
                                    description={blog.description}
                                    likes={blog.likes}
                                    totalLikes={blog.totalLikes}
                                    comments={blog.comments}
                                    totalComments={blog.totalComments}
                                    authorImage={blog.createdBy.profile_image}
                                    authorName={blog.createdBy.name} />
                            </Col>
                        )) : (
                            <Col>
                                <h2 className="text-center mt-4">No Blogs Found.</h2>
                            </Col>
                        )
                    }
                </Row>
            </Container>

            <About />  

            <Contact />      
        </div>
    );
}

export default Home;