import './Post.css';
import shortenNumbers from '../../utils/shortenNumber';
import moment from 'moment';

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


                    <div className="mainContent">
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

                        <div className="mainImage">
                            <img src={post.url} alt={post.title} className="imageContent" />
                        </div>
                        <div className="mainFoot">
                            <div className="mainFooter">
                                <div className="commentFooter">
                                    <span className="material-icons">
                                        chat_bubble_outline
                                    </span>
                                    <h1>{shortenNumbers(post.num_comments, 1)} Comments</h1>
                                </div>
                                <div className='shareFooter'>
                                    <span className="material-icons">
                                        reply
                                    </span>
                                </div>
                                <div className='saveFooter'>
                                    <span className="material-icons">
                                        bookmark_border
                                    </span>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>

            </div>

        </section>
    );
};

export default Post;