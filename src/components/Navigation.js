export default function Navigation(props) {

    const startButtonClass = `dropdown--content-button ${props.id.start && 'clicked--button'}`
    const aboutMeButtonClass = `dropdown--content-button ${props.id.aboutMe && 'clicked--button'}`
    const cvButtonClass = `dropdown--content-button ${props.id.cv && 'clicked--button'}`
    const skillsButtonClass = `dropdown--content-button ${props.id.skills && 'clicked--button'}`

    return (
        <div className="dropdown">
            <button className="dropdown-button"><i className="dropdown--color fa-solid fa-navicon"></i></button>
            <div className="dropdown-content">
                <button className={startButtonClass} disabled={props.id.start} onClick={
                    () => props.toggleEnabled("start")
                }><p>Start</p></button>
                <button className={aboutMeButtonClass} disabled={props.id.aboutMe} onClick={
                    () => props.toggleEnabled("aboutMe")
                }><p>{props.language ? "About me" : "Om mig"}</p></button>
                <button className={cvButtonClass} disabled={props.id.cv} onClick={
                    () => props.toggleEnabled("cv")
                }><p>CV</p></button>
                <button className={skillsButtonClass} disabled={props.id.skills} onClick={
                    () => props.toggleEnabled("skills")
                }><p>{props.language ? "Skills" : "Färdigheter"}</p></button>
            </div>
        </div>
    )
}
