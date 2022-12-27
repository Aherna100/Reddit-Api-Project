import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectPost, loadPost, loadComments } from '../../store/NavigationSlice';
import LoadingSpinner from '../loadingSpinner/LoadingSpinner';
import Post from "./Post";
import { Link } from 'react-router-dom';

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
            dispatch(loadComments({index: index, permalink: permalink}));
        }
        return testThunk;
    }

    return (
        <>
            <div className="first">

            </div>
            {status === "loading" ? <LoadingSpinner /> : (
                <div className="main">
                    {posts.map((post, index) => (
                        <Link
                            key={post.id}
                            to={`/${post.id}`}
                            className={`post${post.title}`}
                        >
                            <Post
                                key={post.id}
                                post={post}
                                commentsLoader={commentsLoader(index)}
                            />
                        </Link>
                    ))};
                </div>
            )}

            <div className="third">

            </div>

        </>
    );
}