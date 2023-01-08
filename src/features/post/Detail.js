import React from "react";
import { useSelector } from "react-redux";
import { useLocation, useParams } from 'react-router-dom';
import { selectPost, selectPostById } from "../../store/NavigationSlice";

import Skeleton from 'react-loading-skeleton';
import Comments from '../comments/Comments';
import moment from 'moment';
import "./Detail.css";
import Footer from "../footer/Footer";

const Detail = (props) => {
    
    console.log(props);
    const id = useParams()
    const location = useLocation();
    const post  = location.state; 
    console.log(id);


    const test = useSelector((state) => state.navigation.selectPostById(state, id));
    console.log(test);

    function ShowComment() {
        if (post.loadingComments === "loading") {
            return (
                <div className="loader">
                    <Skeleton
                        count={5}
                    />
                </div>
            )
        } else if (post.loadingComments === "complete") {
            return (
                <>
                    {post.comments.map((comment) => (
                        <Comments
                            comment={comment}
                            key={comment.id}
                        />
                    ))}
                </>
            )
        }
    }

    function ImgPost() {
        if (post.url.toString().includes("jpg") || post.url.toString().includes("png")) {
            return (<div className="mainImage">
                <img src={post.url} alt={post.title} className="imageContent" />
            </div>)
        } else {
            console.log("failed");
        }
    }

    return (
        <div className="mainContentDetail">
            <div className="authorContent">
                <h2>Posted by {post.author} {moment.unix(post.created_utc).fromNow()}</h2>
                <div className="awards">
                    {post.all_awardings.map((item) => (
                        <img src={item.icon_url} alt={item.name} key={item.id} className="awardIcons" />
                    ))}
                </div>
            </div>
            <div className="titleContent">
                <h1>{post.title}</h1>
            </div>
            <ImgPost />
            <div className="mainBottom">
                <Footer
                    post={post}
                />
            </div>

            <div className="comment">
                <ShowComment />
            </div>
        </div>
    )
}

export default Detail;