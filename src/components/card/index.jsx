import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { getUser } from '../../../constants';

function CardBS({ _id, coverImage, title, description, totalLikes, totalComments, authorImage, authorName }) 
{
    const navigate = useNavigate();

    // Redirect based on authorization
    const redirectTo = useCallback((url) => {
        const user = getUser();
        if(!user) return navigate("/login");
        return navigate(url);
    },[]);    

    return (
        <div className="blog-card" onClick={ () => redirectTo(`/blogs/${_id}`) }>
            {/* Image */}
            <div className="card-image">
                <img src={coverImage} alt={title} />
            </div>

            {/* Content */}
            <div className="card-content">
                <h2>{title}</h2>
                <p>{description.substring(0, 50)} ...</p>
            </div>

            {/* Footer */}
            <div className="card-footer">
                <div className="meta" style={{ whiteSpace:'nowrap' }}>
                    <span>👍 {totalLikes}</span>
                    <span>💬 {totalComments}</span>
                </div>
                <div className="author">
                    <img src={authorImage} alt={authorName} className="author-img" />
                    <span>{authorName}</span>
                </div>
            </div>
        </div>
    );
}

export default CardBS;