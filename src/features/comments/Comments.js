import React, {useState} from "react";
import "./Comments.css";
import moment from 'moment';
import Share from "../shareOption/Share";
import ReactMarkdown from 'react-markdown';
import shortenNumbers from '../../utils/shortenNumber';

const Comments = (props) => {

    const [open, setOpen] = useState(false);

    const { comment } = props;

    function Edited() {
        if (comment.edited) {
            return (
                <p className="commentEdit">
                    edited {moment.unix(comment.edited).fromNow()}
                </p>
            );
        } else {
            return;
        }
    }

    function shareHandler() {
        console.log("Handler working");
        setOpen(!open);
    }

    console.log(comment);
    return (
        <div className="commentContainer">
            <div className="commentTitle">
                <p className="commentName">{comment.author}</p>
                <p className="commentTime">{moment.unix(comment.created_utc).fromNow()}</p>
                <Edited />
            </div>
            <div className="commentBody">
                <ReactMarkdown children={comment.body} />
            </div>
            <div className='cardContentComment'>
                <div className='cardUp'>
                    <span className="material-icons">
                        arrow_upward
                    </span>
                </div>
                <div className="counterContent">
                    <p>{shortenNumbers(comment.ups, 1)}</p>
                </div>
                <div className='cardDown'>
                    <span className="material-icons">
                        arrow_downward
                    </span>
                </div>
                <div className='Reply'>
                    <div>
                        <span className="material-icons">
                            chat_bubble_outline
                        </span>
                    </div>
                    <div>
                        <p>Reply</p>
                    </div>
                </div>
                <div className="Share">
                    <button onClick={() => shareHandler()}>
                        Share
                    </button>
                    {open ? <Share/> : ""}
                </div>
                <div className="Report">
                    <p>Report</p>
                </div>
                <div className="Save">
                    <p>Save</p>
                </div>
                <div className="Follow">
                    <p>Follow</p>
                </div>
            </div>

        </div>
    );
}

export default Comments;