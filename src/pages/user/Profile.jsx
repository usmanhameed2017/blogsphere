import React, { useEffect, useState } from 'react';
import UserProfile from '../../components/profile';
import { fetchMyBlogs } from '../../api/blogs';
import { Col, Container, Row } from 'react-bootstrap';
import CardBS from '../../components/card';

function Profile() 
{
    const [blogs, setBlogs] = useState(null);

    useEffect(() => {
        fetchMyBlogs()
        .then(response => setBlogs(response))
        .catch(error => console.log(error.message));
    },[]);

    console.log("Blogs:", blogs);
    return (
        <>
            <UserProfile />

            <Container fluid className="mt-4">
                <Row>
                    <Col> <hr /> </Col>
                </Row>
                {/* Blog Cards Row */}
                <Row>
                    {
                        blogs?.docs && blogs?.docs?.length > 0 ? blogs?.docs?.map(blog => (
                            <Col key={blog._id} xs={12} sm={6} md={4} lg={3} className="d-flex justify-content-center mb-4">
                                <CardBS 
                                    _id={blog._id}
                                    coverImage={blog.coverImage}
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
        </>
    );
}

export default Profile;