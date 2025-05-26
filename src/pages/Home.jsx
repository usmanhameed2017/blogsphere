import React, { useEffect, useState } from 'react'
import Hero from '../components/hero';
import CardBS from '../components/card';
import axios from 'axios';
import { fetchAllBlogs } from '../api/blogs';

function Home() 
{
    useEffect(() => {
        fetchAllBlogs()
        .then(response => console.log(response))
        .catch(error => console.log(error));
    },[]);
    
    return (
        <div>
            {/* Hero section */}
            <Hero />

            {/* Stylish Divider */}
            <div className="section-divider">
                Top Recent Blogs
            </div>

            {/* Blog cards */}
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                <CardBS 
                coverImage="http://res.cloudinary.com/dz7oftoqu/image/upload/v1747906593/xyi5cmedppmj8dmsexbs.jpg"
                title="A Journey Through React"
                description="Discover the power of React components and build stunning UIs."
                likes={120}
                comments={45}
                authorImage="https://i.pravatar.cc/150?img=5"
                authorName="John Doe" />

                <CardBS 
                coverImage="http://res.cloudinary.com/dz7oftoqu/image/upload/v1747906593/xyi5cmedppmj8dmsexbs.jpg"
                title="Express Your Ideas"
                description="Learn how to express yourself with a modern blogging platform."
                likes={98}
                comments={33}
                authorImage="https://i.pravatar.cc/150?img=7"
                authorName="Jane Smith" />

                <CardBS 
                coverImage="http://res.cloudinary.com/dz7oftoqu/image/upload/v1747906593/xyi5cmedppmj8dmsexbs.jpg"
                title="Express Your Ideas"
                description="Learn how to express yourself with a modern blogging platform."
                likes={98}
                comments={33}
                authorImage="https://i.pravatar.cc/150?img=7"
                authorName="Jane Smith" />              
            </div>            
        </div>
    );
}

export default Home;