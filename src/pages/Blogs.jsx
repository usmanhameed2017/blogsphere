import React from 'react';

function Blogs() 
{
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
        </div>
    );
}

export default Blogs;