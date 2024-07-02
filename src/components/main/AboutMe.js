export default function AboutMe(props) {
    const aboutMeData = props.language ? (
        <div>
            <h1>About me</h1>
            <p>My name is William. I'm 30 years old and live in a small town in Sweden. In my spare time, I enjoy working on programming projects, creating music and helping those around me flesh out their ideas. I spend a lot of time learning new things and prefer to take the time to understand and fix things.<br/><br/>I'm independent, diligent and curious. I enjoy trying new things and exploring whatever catches my interest. Cooking is one of my biggest passions, as it combines a wide variety of new experiences with the opportunity to learn new skills.</p>
        </div>
    ) : (
        <div>
            <h1>Om mig</h1>
<p>Jag heter William. Jag är 30 år och bor i centrala Säffle. På fritiden sysslar jag med egna programmeringsprojekt, musikskapande och annat fix. Jag spenderar mycket tid med att lära mig nya saker, och gillar även att knåpa med diverse prylar i hemmet.<br/><br/>Som person är jag självständig, flitig och nyfiken. Jag tycker om att testa nya saker och att utforska i det som intresserar mig. Matlagning är ett stort intresse för mig, eftersom det kombinerar ett rikt urval av nya erfarenheter med möjlighet att erhålla nya färdigheter.</p>
        </div>
    )
    return aboutMeData
}
