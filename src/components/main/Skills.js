export default function Skills(props) {
    return (
        <div className="skills-div">
            <h1>{props.language ? "Programming" : "Programming"}</h1>
            <h3>{props.language ? "Languages" : "Språk"}</h3>
            <div className="skills-box">
                <div className="skills--inner-div">
                    <h5>{props.language ? "Strong" : "Stark"}:</h5>
                    <ul className="skills-ul">
                        <li>Python</li>
                        <li>JavaScript</li>
                        <li>HTML/CSS</li>
                    </ul>
                </div>
                <div className="skills--inner-div">
                    <h5>{props.language ? "Moderate" : "Medel"}:</h5>
                    <ul>
                        <li>C#</li>
                        <li>C</li>
                        <li>Java</li>
                    </ul>
                </div>
            </div>
            <h3>{props.language ? "Frameworks" : "System"}</h3>
            <div className="skills-box">
                <div className="skills--inner-div">
                    <h5>{props.language ? "Strong" : "Stark"}:</h5>
                    <ul>
                        <li>Flask</li>
                        <li>React</li>
                        <li>Websockets</li>
                    </ul>
                </div>
                <div className="skills--inner-div">
                    <h5>{props.language ? "Moderate" : "Medel"}:</h5>
                    <ul>
                        <li>Linux</li>
                        <li>SQL</li>
                        <li>Ajax</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
