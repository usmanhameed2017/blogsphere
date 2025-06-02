import React, { useCallback, useState } from 'react';
import { Col, Row, Dropdown, Button, Form } from 'react-bootstrap';
import { getTime } from '../../utils/getTime';
import { useNavigate } from 'react-router-dom';
import { FaEllipsisV, FaEdit, FaTrash } from 'react-icons/fa';

function CommentSection({ comments }) {
    const navigate = useNavigate();
    const [showDropdownId, setShowDropdownId] = useState(null);
    const [editingCommentId, setEditingCommentId] = useState(null); // Which comment is being edited
    const [editedText, setEditedText] = useState(''); // Store edited text

    const toggleDropdown = (commentId) => {
        setShowDropdownId(prev => (prev === commentId ? null : commentId));
    };

    // Open edit box
    const handleEditClick = useCallback((comment) => {
        setEditingCommentId(comment._id);
        setEditedText(comment.text); // Set current text as initial value
        setShowDropdownId(null); // Close dropdown
    },[]);

    // Save comment
    const handleSaveEdit = useCallback((commentId) => {
        alert(`Saving edited comment: ${commentId}\nNew text: ${editedText}`);
        setEditingCommentId(null);
        setEditedText('');   
    },[editedText]);

    // Cancel editing
    const handleCancelEdit = useCallback(() => {
        setEditingCommentId(null);
        setEditedText('');
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

                                        {/* Dropdown menu positioning */}
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

                                                        {/* Edit */}
                                                        <Dropdown.Item onClick={() => handleEditClick(comment)}>
                                                            <FaEdit size={20} /> Edit
                                                        </Dropdown.Item>

                                                        {/* Delete */}
                                                        <Dropdown.Item onClick={() => alert(`Delete comment: ${comment?._id}`)}>
                                                            <FaTrash size={20} /> Delete
                                                        </Dropdown.Item>
                                                    </Dropdown.Menu>
                                                )
                                            }
                                        </div>
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
                                                        onChange={(e) => setEditedText(e.target.value)}
                                                    > </textarea>

                                                    <div className='mt-1'>
                                                        <Button size='sm' variant='success' onClick={() => handleSaveEdit(comment._id)}>Save</Button>{' '}
                                                        <Button size='sm' variant='secondary' onClick={handleCancelEdit}>Cancel</Button>
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