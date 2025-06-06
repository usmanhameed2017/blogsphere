import React, { useEffect, useState } from 'react';
import UserProfile from '../../components/profile';
import { fetchMyBlogs } from '../../api/blogs';
import ProfileBlogs from '../../components/profileBlogs';

function Profile() 
{
    const [blogs, setBlogs] = useState(null);
    const [reloadBlog, setReloadBlog] = useState(0);

    useEffect(() => {
        fetchMyBlogs()
        .then(response => setBlogs(response))
        .catch(error => console.log(error.message));
    },[reloadBlog]);

    return (
        <>
            <UserProfile setReloadBlog={ setReloadBlog } />
            <ProfileBlogs blogs={blogs} />          
        </>
    );
}

export default Profile;