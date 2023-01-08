import './Footer.css';
import { useState } from 'react';
import shortenNumber from '../../utils/shortenNumber';
import { useOutsideClick } from '../../utils/clickHandler';

import Share from '../shareOption/Share';

const Footer = (props) => {

    const { post } = props;

    const [open, setOpen] = useState(false);

    function shareHandler() {
        setOpen(!open);
    }

    const shareOutsideHandler = () => {
        setOpen(false);
    }

    const ref = useOutsideClick(shareOutsideHandler);

    return (
        <div className="mainFoot">
            <div className="mainFooter">
                <div className="commentFooter">
                    <span className="material-icons">
                        chat_bubble_outline
                    </span>
                    <h1>{shortenNumber(post.num_comments, 1)} Comments</h1>
                </div>
                <div className='shareFooter' ref={ref} onClick={() => shareHandler()}>
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
            {open ? <Share /> : null}
        </div>
    );
}

export default Footer;