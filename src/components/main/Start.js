export default function Start(props) {
    const startData = props.language ? (
            <div>
                <h1>Problem Solver/<br/>Creative Insight</h1>
                <p>Are you looking for someone naturally curious and eager to excel? Someone with a knack for problem solving and analytical thinking? Someone who can contribute creative solutions?<br/><br/>If independence, attention to detail, and the ability to learn quickly are important to you, don't hesitate to contact me!</p>
            </div>
    ) :  
    (
            <div>
                <h1>Problemlösare/<br/>Kreativ Insikt</h1>
                    <p>Behöver ni en naturligt nyfiken och driven arbetare? Någon med fallenhet för problemlösning och analytiskt tänkande? Någon som kan bidra med kreativa lösningar?<br/><br/>Om noggrannhet, självständighet och lättlärdhet är viktiga egenskaper för er, tvivla inte på att höra av er!</p>
            </div>
    )
    return startData
}
