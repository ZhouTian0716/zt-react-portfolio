import Card from "./Card.jsx"
import "./Card.scss"

const cards = [
    {
        id:"1",
        title: 'Password Generator',
        deployUrl: 'https://zhoutian0716.github.io/bootcamp-assignment-week3/',
        repoUrl:'https://github.com/ZhouTian0716/bootcamp-assignment-week3.git'
    },
    {
        id:"2",
        title: 'Coding Quiz',
        deployUrl: 'https://zhoutian0716.github.io/bootcamp-assignment-week4/',
        repoUrl:'https://github.com/ZhouTian0716/bootcamp-assignment-week4.git'
    },
    {
        id:"3",
        title: 'Weather Dash Board',
        deployUrl: 'https://zhoutian0716.github.io/Weather-Dashboard/',
        repoUrl:'https://github.com/ZhouTian0716/project1-08'
    },
    {
        id:"4",
        title: 'Web News',
        deployUrl: 'https://zhoutian0716.github.io/project1-08/',
        repoUrl:'https://github.com/ZhouTian0716/Weather-Dashboard'
    },
    {
        id:"5",
        title: 'ThyWill PDF Generator',
        deployUrl: 'https://thy-will.herokuapp.com/',
        repoUrl:'https://github.com/Forester93/thy-will'
    },
    {
        id:"6",
        title: 'Web Dev Blog',
        deployUrl: 'https://web-dev-bbs.herokuapp.com/',
        repoUrl:'https://github.com/ZhouTian0716/WebDevBlog'
    },  
];

export default function Cards() {
    return (
        <div className="cards">
            {cards.map((card) => (
                <Card key={card.id} id={card.id} title={card.title} deployUrl={card.deployUrl} repoUrl={card.repoUrl}/>
            ))}
        </div>
    )
}
