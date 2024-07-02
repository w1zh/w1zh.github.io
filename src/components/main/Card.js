export default function Cards(props) {
    return (
        <div className="card">
            <h4><u><a href={props.data.link} target="_blank">{props.data?.course ? props.data.course : props.data.role} &bull; {props.data?.school ? props.data.school : props.data.company}</a></u><br/><i className="main--date">{props.data.from} - {props.data.to}</i></h4>
            <p>{props.data.para}</p>
        </div>
    )
}
