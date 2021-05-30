import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import config from '../../config';
import './PostFeeds.css';

const PostFeeds = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const result = await axios(config.API_URL.POSTS);
            setPosts(result.data);
        };

        fetchPosts();
    }, []);

    return (
        <div className="container-fluid video-player">
            <div className="container">
                <div className="row vr-gallery">
                    {posts.map(post => (
                        <div className="row" key={`post-${post.id}`}>
                            <div className="col-md-8 mb-4">
                                <div className="row">
                                    <div className="col-md-12 col-lg-7 pr-0 pd-md">
                                        <img src="images/gallery-img1.png" alt="" />
                                    </div>
                                    <div className="col-md-12 col-lg-5 light-bg cus-pd cus-arrow-left">
                                        <p><small>march 27, 2020</small></p>
                                        <h3>{post.title}</h3>
                                        <p>{post.body}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 pl-4 mb-4">
                                <div className="card">
                                    <img className="card-img h-100" src="images/video-cover1.jpg" alt="" />
                                    <div className="card-img-overlay opacity text-center">
                                        <Link className="play-1" to={`/comments/${post.id}`}>
                                            <i className="fas fa-comments fa-2x"></i>
                                        </Link>
                                        <h5 className="card-title">View all comments...</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                    <div className="col-md-12 text-center">
                        <a href="/#" className="btn">LOAD MORE</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PostFeeds;