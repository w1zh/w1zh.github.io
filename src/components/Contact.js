export default function Contact(props) {
    return (
        <div className="contact-div">
            <h4 className={props.animate ? "fade-box" : undefined}>{props.language ? "Contact" : "Kontakt"}:</h4>
            <div className={props.animate ? "contact--inner-text fade-box" : "contact--inner-text"}>
                <p>{props.language ? "+46 73 710 55 86" : "073-710 55 86"}</p>
                <p>william.gustafsson94@hotmail.com</p>
            </div>
            <div className="contact--inner-links">
                <a href="https://github.com/w1zh" target="_blank"><i className="contact--icon fa-brands fa-github" />github.com/w1zh</a>
                <a href="https://linkedin.com/in/w1zh" target="_blank"><i className="contact--icon fa-brands fa-linkedin" />linkedin.com/in/w1zh</a>
            </div>
        </div>
    )
}
