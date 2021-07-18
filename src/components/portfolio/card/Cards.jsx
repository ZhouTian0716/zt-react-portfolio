import Card from "./Card.jsx"
import "./Card.scss"


const cards = [
    {
        title: 'Password Generator',
        img:'./img/1.jpg',
        deployUrl: 'https://zhoutian0716.github.io/bootcamp-assignment-week3/',
        repoUrl:'https://github.com/ZhouTian0716/bootcamp-assignment-week3.git'
    },
    {
        title: 'Coding Quiz',
        img:'./img/2.jpg',
        deployUrl: 'https://zhoutian0716.github.io/bootcamp-assignment-week4/',
        repoUrl:'https://github.com/ZhouTian0716/bootcamp-assignment-week4.git'
    },
    {
        title: 'Weather Dash Board',
        img:'./img/3.jpg',
        deployUrl: 'https://zhoutian0716.github.io/Weather-Dashboard/',
        repoUrl:'https://github.com/ZhouTian0716/project1-08'
    },
    {
        title: 'Web News',
        img:'./img/4.jpg',
        deployUrl: 'https://zhoutian0716.github.io/project1-08/',
        repoUrl:'https://github.com/ZhouTian0716/Weather-Dashboard'
    },
    
];

export default function Cards() {
    return (
        <div className="cards">
            {cards.map((card, index) => (
                <Card key={index} card={card}/>
            ))}
        </div>
    )
}
