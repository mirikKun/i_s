import "./specialist.css"
import StubImage from './images/specialist.png'
import Like from './images/like.png';
import {Link} from "react-router-dom";

export default function Specialist({specialist}) {
    const imagePath = "http://localhost:8080/images/"
    return (
    <div className="spesialist">
        <img className="spesialist-image" src={StubImage}/>
        <div className="blog-item-details">
            <span className="spesialist-title">{specialist.name}</span>
            <span className="spesialist-short">5 років досвіду</span>
            {specialist.specializations.map(specialization => (
                <span className="spesialist-short">{specialization.name}</span>
            ))}
        </div>
        <div className="spesialist-choose-btn">
            <button className="spesialists-filter-btn"><Link to="/appointmentsBoard">Записатись на прийом</Link></button>
            <img className="spesialist-like" src={Like}/>
        </div>
    </div>
    )
}