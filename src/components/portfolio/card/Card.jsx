
import "./Card.scss"

export default function card({ id, title, deployUrl, repoUrl }) {
  

    return (

        <div className="card">
            <button><a href={deployUrl} target="_blank" rel="noreferrer">{title}</a></button>
            <img src={require(`./img/${id}.jpg`).default} height={300} width={400} alt={title}/>
            <button><a href={repoUrl} target="_blank" rel="noreferrer">Repo</a></button>
        </div>
    )
}
