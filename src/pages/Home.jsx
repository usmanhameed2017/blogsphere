import React, { useEffect, useState } from 'react'
import Hero from '../components/hero';
import CardBS from '../components/card';
import axios from 'axios';
import { fetchAllBlogs } from '../api/blogs';

function Home() 
{
    const [blogs, setBlogs] = useState(null);

    useEffect(() => {
        fetchAllBlogs()
        .then(response => {
            setBlogs(response.data);
            console.log(response);
        })
        .catch(error => console.log(error));
    },[]);

    console.log("Blogs", blogs);
    
    return (
        <div>
            {/* Hero section */}
            <Hero />

            {/* Stylish Divider */}
            <div className="section-divider">
                Top Recent Blogs
            </div>

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
                            authorName={blog.createdBy.name} 
                        /> 
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

export default Home;