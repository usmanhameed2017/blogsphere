import React, { useEffect, useState } from 'react';
import UserProfile from '../../components/profile';
import { fetchMyBlogs } from '../../api/blogs';
import { Col, Container, Row } from 'react-bootstrap';
import CardBS from '../../components/card';
import ProfileBlogs from '../../components/profileBlogs';

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

            <ProfileBlogs blogs={blogs} />          
        </>
    );
}

export default Profile;