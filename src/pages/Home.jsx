import React, { useEffect, useState } from 'react'
import Hero from '../components/hero';
import CardBS from '../components/card';
import { fetchRecentBlogs } from '../api/blogs';
import About from './About';
import Contact from './Contact';

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

            {/* Blog cards container */}
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                {
                    blogs && blogs?.length > 0 ? blogs?.map(blog => (
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

            <About />  

            <Contact />      
        </div>
    );
}

export default Home;