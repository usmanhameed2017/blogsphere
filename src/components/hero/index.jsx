import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { getUser } from '../../../constants';


function Hero() 
{
    const navigate = useNavigate();

    // Redirect based on authorization
    const redirectTo = useCallback((url) => {
        const user = getUser();
        if(!user) return navigate("/login");
        return navigate(url);
    },[]);
    
    return (
        <div className="home-hero">
            <h1 className="display-3 fw-bold"> Welcome to BlogSphere </h1>
            <p className='lead'>Discover amazing stories, write your own, and connect with the community. Express yourself and be inspired.</p>
            <button onClick={ () => redirectTo('/blogs') }> Explore Blogs </button>
        </div>
    );
}

export default Hero;