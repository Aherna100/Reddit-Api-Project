import React, { useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import { useSelector, useDispatch } from "react-redux";
import { selectPost, loadPost, loadComments } from '../../store/NavigationSlice';

import Post from "../main/Post";
import Navigation from "../search/Navigation";

export default function HomePage() {
    const posts = useSelector(selectPost);
    const dispatch = useDispatch();
    const status = useSelector(state => state.navigation.isLoading);

    useEffect(() => {
        if (status === 'idle') {
            dispatch(loadPost());
        }
    }, [dispatch, status]);

    const commentsLoader = (index) => {
        const testThunk = (permalink) => {
            dispatch(loadComments({ index: index, permalink: permalink }));
        }
        return testThunk;
    }

    return (
        <>  
            <Navigation/>

            <div className="first">

            </div>
            {status === "loading" ? 
                <Skeleton
                    height={120}
                /> : (
                <div className="main">
                    {posts.map((post, index) => (
                        <Post
                            key={post.id}
                            post={post}
                            commentsLoader={commentsLoader(index)}
                        />
                    ))}
                </div>
            )}

            <div className="third">

            </div>

        </>
    );
}