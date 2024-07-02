import Start from "./main/Start"
import AboutMe from "./main/AboutMe"
import CV from "./main/CV"
import Skills from "./main/Skills"

export default function Main(props) {
    return (
        <main className={props.animate ? "main fade-box" : "main"}>
            <div className="main-div">
                {props.id.start && <Start language={props.language}/>}
                {props.id.aboutMe && <AboutMe language={props.language}/>}
                {props.id.cv && <CV language={props.language} />}
                {props.id.skills && <Skills language={props.language}/>}
            </div>
        </main>
    )
}
