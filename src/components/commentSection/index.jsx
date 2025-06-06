import React, { useCallback, useEffect, useState } from 'react';
import { Col, Row, Dropdown, Button, Form } from 'react-bootstrap';
import { getTime } from '../../utils/getTime';
import { useNavigate } from 'react-router-dom';
import { FaEllipsisV, FaEdit, FaTrash } from 'react-icons/fa';
import axios from 'axios';
import { axiosOptions, backendURL, getUser } from '../../../constants';
import { ApiResponse } from '../../utils/ApiResponse';
import { ApiError } from '../../utils/ApiError';
import { showError, showSuccess } from '../../utils/toasterMessage';

function CommentSection({ comments, setReloadComments, createdById }) 
{
    const navigate = useNavigate();
    const [showDropdownId, setShowDropdownId] = useState(null);
    const [editingCommentId, setEditingCommentId] = useState(null); // Which comment is being edited
    const [editedText, setEditedText] = useState(''); // Store edited text

    const user = getUser();

    // Toggle dropdown
    const toggleDropdown = useCallback((commentId) => {
        setShowDropdownId(prev => (prev === commentId ? null : commentId))
    },[]);

    // Open edit box
    const handleEditClick = useCallback((comment) => {
        setEditingCommentId(comment._id);
        setEditedText(comment.text);
        setShowDropdownId(null);
    },[]);

    // Save comment
    const saveEdit = useCallback(async (commentId) => {
        if(!commentId) return null;
        try 
        {
            const response = await axios.patch(`${backendURL}/comment/blog/${commentId}`, { text:editedText }, axiosOptions);
            setReloadComments(prev => prev + 1);
            showSuccess(ApiResponse(response).message);
            setEditingCommentId(null);
            setEditedText('');
        } 
        catch(error) 
        {
            showError(ApiError(error));
        }
    },[editedText]);

    // Cancel editing
    const cancelEdit = useCallback(() => {
        setEditingCommentId(null);
        setEditedText('');
    },[]);

    // Delete comment
    const deleteComment = useCallback(async (commentId) => {
        if(!commentId) return null;
        try 
        {
            const response = await axios.delete(`${backendURL}/comment/blog/${commentId}`, axiosOptions);
            showSuccess(ApiResponse(response).message);
            setReloadComments(prev => prev + 1);
            setShowDropdownId(null);
        } 
        catch (error) 
        {
            showError(ApiError(error).message);
        }
    },[]);

    return (
        <div className='comment-section'>
            <div>
                {
                    comments?.map(comment => (
                        <div key={comment?._id} className='blog-comment'>
                            <Row className='m-1 p-1'>
                                <Col>
                                    <div className='d-flex justify-content-between align-items-center'>
                                        <div className='d-flex align-items-center'>
                                            <img 
                                                src={ comment?.commentedBy?.profile_image } 
                                                alt="profile_image"
                                                className='rounded-circle'
                                                height={30}
                                                width={30} 
                                            /> &nbsp;

                                            <strong className='commentProfile' onClick={() => navigate(`/user/${comment?.commentedBy?._id}`)}>
                                                { comment?.commentedBy?.name }
                                            </strong>
                                        </div>

                                        {/* Three dotted menu will be shown to owner of blog and the one who commented on blog */}
                                        {
                                            createdById === user?._id || comment?.commentedBy?._id === user?._id ? 
                                            (
                                                // Dropdown menu positioning
                                                <div className='dropdown-container' style={{ position: 'relative', display: 'inline-block' }}>
                                                    <FaEllipsisV style={{ cursor: 'pointer' }} onClick={() => toggleDropdown(comment?._id)} />

                                                    {
                                                        showDropdownId && showDropdownId === comment?._id && 
                                                        (
                                                            <Dropdown.Menu 
                                                            show 
                                                            className='show-dropdown' 
                                                            style={{ 
                                                                position: 'absolute', 
                                                                right: 0,
                                                                top: '100%',
                                                                zIndex: 1000,
                                                            }} >

                                                            {/* Only commentor can edit his own comment */}
                                                            {
                                                                comment?.commentedBy?._id === user?._id && (
                                                                    //Edit
                                                                    <Dropdown.Item onClick={ () => handleEditClick(comment)}>
                                                                        <FaEdit size={20} /> Edit
                                                                    </Dropdown.Item>                                                                    
                                                                )
                                                            }

                                                                {/* Delete */}
                                                                <Dropdown.Item onClick={ () => deleteComment(comment._id) }>
                                                                    <FaTrash size={20} /> Delete
                                                                </Dropdown.Item>
                                                            </Dropdown.Menu>
                                                        )
                                                    }
                                                </div>
                                            )
                                            :
                                            (
                                                <div></div>
                                            )
                                        }

                                    </div>

                                    {/* Comment Text or Edit Form */}
                                    <div style={{ marginLeft: "35px", marginTop: '5px' }}>
                                        {
                                            editingCommentId && editingCommentId === comment._id ? 
                                            (
                                                <>
                                                    <textarea
                                                        className="form-control"
                                                        placeholder='Modify Comment'
                                                        rows={2}
                                                        value={editedText}
                                                        onChange={ (e) => setEditedText(e.target.value) }> </textarea>

                                                    <div className='mt-1'>
                                                        <Button size='sm' variant='success' onClick={() => saveEdit(comment._id)}>Save</Button>{' '}
                                                        <Button size='sm' variant='secondary' onClick={cancelEdit}>Cancel</Button>
                                                    </div>
                                                </>
                                            ) 
                                            : 
                                            (
                                                <p>{ comment.text }</p>
                                            )
                                        }
                                    </div>

                                    <p className='text-secondary' style={{ marginLeft: "35px" }}>
                                        { getTime(comment?.createdAt) }
                                    </p>
                                </Col>
                            </Row>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default React.memo(CommentSection);