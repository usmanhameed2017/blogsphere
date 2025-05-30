import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { getTime } from '../../utils/getTime';
import { useNavigate } from 'react-router-dom';

function CommentSection({ comments }) 
{
    const navigate = useNavigate();
    console.log("Comments", comments)
    return (
        <div className='comment-section'>
            <div>
            {
                comments?.map(comment => (
                    <div key={comment?._id} className='blog-comment'>
                        <Row className='m-2 p-2'>
                            <Col>
                                <span> 
                                    <img 
                                    src={ comment?.commentedBy?.profile_image } 
                                    alt="profile_image"
                                    className='rounded-circle'
                                    height={30}
                                    width={30} /> 
                                </span> &nbsp;

                                <strong className='commentProfile' onClick={ () => navigate(`/user/${comment?.commentedBy?._id}`) }> { comment?.commentedBy?.name }:&nbsp;</strong> 
                                <span> { comment.text } </span> <small className='text-secondary'> { getTime(comment?.createdAt) } </small>
                            </Col>
                        </Row>                        
                    </div>
                ))
            }
            </div>
        </div>
    )
}

export default CommentSection;