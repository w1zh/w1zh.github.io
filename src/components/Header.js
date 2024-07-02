export default function Header(props) {
    return (
        <nav className="nav">
            <div className="header">
                <img src="profilepic.jpg" alt="profile picture" className="profilepic" />
                <h1>William Gustafsson</h1>
            </div>
            <div className="language-div">
                <h6>{props.language ? "SE" : "EN"}</h6>
                <button className="language-button" onClick={props.toggleLanguage}><span className={props.language ? "fi fi-se" : "fi fi-us"}></span></button>
            </div>
        </nav>
    )
}
