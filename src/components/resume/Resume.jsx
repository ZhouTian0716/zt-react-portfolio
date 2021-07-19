import myCV from './RESUME.pdf';
import "./Resume.scss"

export default function resume() {
    return (
        <div className="resume">
            <h1>Resume</h1>
            <button><a href={myCV} target="_blank" rel="noreferrer">My CV</a></button>
            <h2>Front-end Proficiencies</h2>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>jQuery</li>
                <li>Responsive design</li>
                <li>React</li>
                <li>Bootstrap</li>
            </ul>
            <h2>Back-end Proficiencies</h2>
            <ul>
                <li>APIs</li>
                <li>Node</li>
                <li>Express</li>
                <li>MySQL, Sequelize</li>
                <li>MongoDB, Mongoose</li>
                <li>REST</li>
                <li>GraphQL</li>
            </ul>
        </div>
    )
}
