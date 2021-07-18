import myIcon from './img/1.jpg';
import "./Card.scss"



export default function card({card}) {


    return (
        <div className="card" style={{backgroundImage:'url('+ myIcon +')'}}>


        
            <h3>{card.title}</h3>
            
           
            <h6>{card.deployUrl}</h6>
            <h6>{card.img}</h6>
        </div>
    )
}
