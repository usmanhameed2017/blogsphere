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
                        <Row className='m-1 p-1'>
                            <Col>
                                <span> 
                                    <img 
                                    src={ comment?.commentedBy?.profile_image } 
                                    alt="profile_image"
                                    className='rounded-circle'
                                    height={30}
                                    width={30} /> 
                                </span> &nbsp;

                                <strong className='commentProfile' onClick={ () => navigate(`/user/${comment?.commentedBy?._id}`) }> { comment?.commentedBy?.name } </strong> 
                                <p style={{ marginLeft:"45px", marginTop:'5px' }}> { comment.text } </p> 
                                <p className='text-secondary' style={{ marginLeft:"45px" }}> { getTime(comment?.createdAt) } </p>
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