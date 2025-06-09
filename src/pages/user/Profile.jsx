import React, { useEffect, useState } from 'react';
import UserProfile from '../../components/profile';
import { fetchMyBlogs } from '../../api/blogs';
import ProfileBlogs from '../../components/profileBlogs';
import ServerSidePagination from '../../components/pagination';

function Profile() 
{
    const [blogs, setBlogs] = useState(null);
    const [reloadBlog, setReloadBlog] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        fetchMyBlogs(currentPage)
        .then(response => setBlogs(response))
        .catch(error => console.log(error.message));
    },[reloadBlog, currentPage]);

    return (
        <>
            <UserProfile setReloadBlog={ setReloadBlog } />
            <ProfileBlogs blogs={blogs} />   
            <ServerSidePagination blogs={blogs} setCurrentPage={setCurrentPage} />       
        </>
    );
}

export default Profile;