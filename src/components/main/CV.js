import Card from "./Card"
import {nanoid} from "nanoid"
import {eduDataSwe, eduDataEng, expDataSwe, expDataEng} from "./cvdata"

export default function CV(props) {
    const eduCardElements = props.language ? mapData(eduDataEng) : mapData(eduDataSwe) 
    const expCardElements = props.language ? mapData(expDataEng) : mapData(expDataSwe)

    function mapData(arr) {
        return arr.map(data => {
            return <Card key={nanoid()} data={data} />
        })
    }

    return (
        <div className="main--cv-div">
            <div className="main--h3-div">
                <i className="main--cv-faw fa-solid fa-graduation-cap" />
                <h3><b>{props.language ? "Education" : "Utbildning"}</b></h3>
            </div>
            {eduCardElements}
            <div className="main--h3-div">
                <i className="main--cv-faw fa-solid fa-folder-open" />
                <h3><b>{props.language ? "Experience" : "Erfarenhet"}</b></h3>
            </div>
            {expCardElements} 
        </div>
    )
}
