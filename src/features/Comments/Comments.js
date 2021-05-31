import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import config from '../../config';
import { selectComments, addComment } from '../../redux/commentsSlice';
import './Comments.css';

const Comments = () => {
    let { postId } = useParams();
    const dispatch = useDispatch();
    const [post, setPost] = useState(null);
    const [comments, setComments] = useState(useSelector(selectComments).filter(comment => comment.postId === Number(postId)));
    const [nameInputValue, setNameInputValue] = useState('');
    const [emailInputValue, setEmailInputValue] = useState('');
    const [commentTextValue, setCommentTextValue] = useState('');

    useEffect(() => {
        const fetchPost = async (postId) => {
            const result = await axios.get(`${config.API_URL.POSTS}/${postId}`);
            setPost(result ? result.data : null);
        };

        const fetchComments = async (postId) => {
            const result = await axios.get(`${config.API_URL.COMMENTS}?postId=${postId}`);
            setComments(result ? result.data.concat(comments) : []);
        };

        fetchPost(postId);
        fetchComments(postId);
    }, [postId]);

    const changeName = (event) => {
        setNameInputValue(event.target.value);
    }

    const changeEmail = (event) => {
        setEmailInputValue(event.target.value);
    }

    const changeComment = (event) => {
        setCommentTextValue(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        const newComment = {
            postId: Number(postId),
            id: comments[comments.length - 1] ? comments[comments.length - 1].id + 1 : 0,
            name: nameInputValue,
            email: emailInputValue,
            body: commentTextValue,
        };

        dispatch(addComment(newComment));
        setComments([...comments, newComment]);
    }

    return (
        <div className="container-fluid video-player">
            <div className="container">
                <div className="row vr-gallery">
                    {post &&
                        <div id={post.id} className="col-md-8 mb-4">
                            <div className="row">
                                <div className="col-md-12 col-lg-7 pr-0 pd-md">
                                    <img src="/images/gallery-img1.png" alt="" />
                                </div>
                                <div className="col-md-12 col-lg-5 light-bg cus-pd cus-arrow-left">
                                    <h3>{post.title}</h3>
                                    <p>{post.body}</p>
                                </div>
                            </div>
                        </div>
                    }
                    <div id="user-comment" className="col-md-8 mb-4">
                        <div className="row">
                            <div className="col-md-12 col-lg-12 light-bg cus-pd cus-arrow-left">
                                <h3>Leave a comment here:</h3>
                                <form onSubmit={handleSubmit}>
                                    <label>
                                        Name:
                                        <input data-testid="inputName" id="name" className="input-name" name="name" type="text" value={nameInputValue} onChange={changeName} />
                                    </label>
                                    <label>
                                        Email:
                                        <input data-testid="inputEmail" id="email" className="input-email" name="email" type="email" value={emailInputValue} onChange={changeEmail} />
                                    </label>
                                    <label>
                                        Comment:
                                        <textarea data-testid="inputComments" className="comments" value={commentTextValue} onChange={changeComment} />
                                    </label>
                                    <div className="submit-container">
                                        <input data-testid="buttonPublish" id="addComment" name="addComment" type="submit" value="Publish" />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    {comments &&
                        <div id="comments" className="col-md-8 mb-4">
                            {comments.map(comment => (
                                <div key={`comment-${comment.id}`} className="row">
                                    <div className="col-md-12 col-lg-12 light-bg cus-pd cus-arrow-left">
                                        <h3>{comment.name}</h3>
                                        <h6>{comment.email}</h6>
                                        <p>{comment.body}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default Comments;
