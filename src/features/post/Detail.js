import React from "react";
import { useSelector } from "react-redux";
import { useParams } from 'react-router-dom';
import { selectPostById } from "../../store/NavigationSlice";

import Skeleton from 'react-loading-skeleton';
import Comments from '../comments/Comments';
import moment from 'moment';
import "./Detail.css";
import shortenNumber from "../../utils/shortenNumber";

const Detail = () => {
    const { id } = useParams();
    const post = useSelector(state => selectPostById(state, id));

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
                <div className="mainDFooter">
                    <div className="commentOption">
                        <div>
                            <span className="material-icons">
                                chat_bubble_outline
                            </span>
                        </div>
                        <div className="numComments">
                            <h1>{shortenNumber(post.num_comments, 1)} Comments</h1>
                        </div>
                    </div>
                </div>
            </div>

            <div className="comment">
                <ShowComment />
            </div>
        </div>
    )
}

export default Detail;