

export default function Navigation() {

    return (
        <nav className="navBar">
            <div className="navContent">
                <img src="reddit-logo.png" alt="reddit logo" className="navImg"/>
                <input type="text" placeholder="search something" className="navSearch"/>
                <button onClick="#" className="searchButton">Search</button>
            </div>
        </nav>
    );

}