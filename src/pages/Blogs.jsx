import React, { useEffect, useState } from 'react';
import { fetchAllBlogs } from '../api/blogs';
import CardBS from '../components/card';

function Blogs() 
{
    const [blogs, setBlogs] = useState();

    useEffect(() => {
        fetchAllBlogs()
        .then(response => setBlogs(response))
        .catch(error => console.log(error.message))
    },[]);
    console.log("All Blogs:", blogs);

    return (
        <div className="blog-container">
            {/* Hero Section */}
            <section className="home-hero" style={{ backgroundColor: '#1e1f26', color: 'white', padding: '4rem 2rem', textAlign: 'center' }}>
                <h1 className=''>EXPLORE BLOGS</h1>
                <p>Explore a world of ideas, insights, and inspiration. Join our community of writers and readers, and discover stories that matter.</p>
                <p>
                    Dive into a diverse range of topics from technology, lifestyle, personal growth, to the latest industry trends.
                    Whether you're a passionate writer sharing your experiences, or a curious reader looking for fresh perspectives,
                    our blog is the perfect place to connect, learn, and grow. Start your blogging journey with us today!
                </p>
            </section>

            {/* Divider */}
            <div className="section-divider">Explore More</div>

            {/* Blog cards container */}
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                {
                    blogs?.docs && blogs?.docs?.length > 0 ? blogs?.docs?.map(blog => (
                        <CardBS 
                        key={blog._id}
                        coverImage={blog.coverImage}
                        title={blog.title}
                        description={blog.description}
                        likes={blog.likes}
                        totalLikes={blog.totalLikes}
                        comments={blog.comments}
                        totalComments={blog.totalComments}
                        authorImage={blog.createdBy.profile_image}
                        authorName={blog.createdBy.name} /> 
                    ))
                    : 
                    <h2 style={{ textAlign: 'center', width: '100%', marginTop: '2rem' }}>
                        No Blogs Found.
                    </h2>
                }
            </div>            
        </div>
    );
}

export default Blogs;