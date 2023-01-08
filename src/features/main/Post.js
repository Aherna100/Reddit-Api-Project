import './Post.css';
import shortenNumbers from '../../utils/shortenNumber';
import moment from 'moment';
import { Link } from 'react-router-dom';
import Footer from '../footer/Footer';

const Post = (props) => {

    const { post, commentsLoader } = props;

    return (
        <section key={post.id}>
            <div className="homeReddit">

                <div className='cardContent'
                    onClick={() => commentsLoader(post.permalink)}
                >
                    <div className='cardCont'>
                        <div className='cardUp'>
                            <span className="material-icons">
                                arrow_upward
                            </span>
                        </div>
                        <div className="counterContent">
                            <h4>{shortenNumbers(post.ups, 1)}</h4>
                        </div>
                        <div className='cardDown'>
                            <span className="material-icons">
                                arrow_downward
                            </span>
                        </div>
                    </div>
                    <div className='cardLink'>
                        <Link
                            key={post.id}
                            to={`/image/${post.id}`}
                            className={`post${post.title}`}
                            state={post}
                        >
                            <div className="mainContent">
                                <div className="authorContent">
                                    <div className="authorInfo">
                                        <h2>Posted by {post.author} {moment.unix(post.created_utc).fromNow()}</h2>
                                    </div>
                                    <div className="awards">
                                        {post.all_awardings.map((item) => (
                                            <img src={item.icon_url} alt={item.name} key={item.id} className="awardIcons" />
                                        ))}
                                    </div>
                                </div>
                                <div className="titleContent">
                                    <h1>{post.title}</h1>
                                </div>

                                <div className="mainImage">
                                    <img src={post.url} alt="" className="imageContent" />
                                </div>
                            </div>
                        </Link>

                        <Footer
                            post={post}
                        />
                    </div>
                </div>

            </div>

        </section>
    );
};

export default Post;