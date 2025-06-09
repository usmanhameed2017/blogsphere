import React, { useEffect, useState } from 'react';
import { fetchAllBlogs } from '../api/blogs';
import CardBS from '../components/card';
import { Container, Row, Col } from 'react-bootstrap';
import ServerSidePagination from '../components/pagination';

function Blogs() {
    const [blogs, setBlogs] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        fetchAllBlogs(currentPage)
            .then(response => setBlogs(response))
            .catch(error => console.log(error.message))
    }, [currentPage]);
    console.log("All Blogs:", blogs);

    return (
        <div className="blog-container">
            {/* Hero Section */}
            <section className="home-hero" style={{ backgroundColor: '#1e1f26', color: 'white', padding: '4rem 2rem', textAlign: 'center' }}>
                <h1>Explore Blogs</h1>
                <p>Explore a world of ideas, insights, and inspiration. Join our community of writers and readers, and discover stories that matter.</p>
                <p>
                    Dive into a diverse range of topics from technology, lifestyle, personal growth, to the latest industry trends.
                    Whether you're a passionate writer sharing your experiences, or a curious reader looking for fresh perspectives,
                    our blog is the perfect place to connect, learn, and grow. Start your blogging journey with us today!
                </p>
            </section>

            {/* Divider */}
            <div className="section-divider">Explore More</div>

            {/* Container For Blog Cards */}
            <Container className="mt-4">
                {/* Blog Cards Row */}
                <Row>
                    {
                        blogs?.docs && blogs?.docs?.length > 0 ? blogs?.docs?.map(blog => (
                            <Col key={blog._id} xs={12} sm={6} md={4} lg={3} className="d-flex justify-content-center mb-4">
                                <CardBS 
                                    _id={blog._id}
                                    coverImage={blog.coverImage || `/default-blog-title-image.jpeg`}
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

                {/* Pagination row */}
                <Row>
                    <Col>
                        <ServerSidePagination blogs={blogs} setCurrentPage={setCurrentPage} />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Blogs;