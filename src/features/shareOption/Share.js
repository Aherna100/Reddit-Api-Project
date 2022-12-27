import "./Share.css";

const Share = () => {
    return (
        <div className="shareList">
            <ol className="menu">
                <li>
                    <div className="fItem">
                        <div>
                            <span class="material-icons">
                                link
                            </span>
                        </div>
                        <div>
                            <p>Copy Link</p>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="sItem">
                        <div>
                            <span class="material-icons">
                                code
                            </span>
                        </div>
                        <div>
                            <p>Embed</p>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="tItem">
                        <div>
                            <span class="material-icons">
                                ios_share
                            </span>
                        </div>
                        <div className="sOption">
                            <p>Share To Chat</p>
                        </div>
                    </div>
                </li>
            </ol>
        </div>
    );
}

export default Share;