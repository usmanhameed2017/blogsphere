import React from 'react';

function CardBS({ imgSrc, title, description, likes, comments, authorImg, authorName }) 
{
    return (
        <div className="blog-card">
            {/* Image */}
            <div className="card-image">
                <img src={imgSrc} alt={title} />
            </div>

            {/* Content */}
            <div className="card-content">
                <h2>{title}</h2>
                <p>{description}</p>
            </div>

            {/* Footer */}
            <div className="card-footer">
                <div className="meta">
                <span>👍 {likes}</span>
                <span>💬 {comments}</span>
                </div>
                <div className="author">
                <img src={authorImg} alt={authorName} className="author-img" />
                <span>{authorName}</span>
                </div>
            </div>
        </div>
    );
}

export default CardBS;