import React from 'react';
import { useNavigate } from 'react-router-dom';

function Hero() 
{
    const navigate = useNavigate();
    return (
        <div className="home-hero">
            <h1 className="display-3 fw-bold"> Welcome to BlogSphere </h1>
            <p className='lead'>Discover amazing stories, write your own, and connect with the community. Express yourself and be inspired.</p>
            <button onClick={ () => navigate("/blogs") }> Explore Blogs </button>
        </div>
    );
}

export default Hero;