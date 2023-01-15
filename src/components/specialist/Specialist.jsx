import "./specialist.css"
import StubImage from './images/specialist.png'
import Like from './images/like.png';
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";

export default function Specialist({specialist}) {
    const imagePath = "http://localhost:8080/files/"
    const [imageData, setImageData] = useState([])
    useEffect(() => {
        const fetchAppointments = async () => {
            const res = await axios.get(imagePath+specialist.imageId);
            setImageData(res.data)
        }
        fetchAppointments()
    }, [])
    return (
    <div className="spesialist">
        <img className="spesialist-image" src={"data:image/jpg;base64," +imageData}/>
        <div className="blog-item-details">
            <span className="spesialist-title">{specialist.name}</span>
            <span className="spesialist-short">5 років досвіду</span>
            {specialist.specializations.map(specialization => (
                <span className="spesialist-short">{specialization.name}</span>
            ))}
        </div>
        <div className="spesialist-choose-btn">
            <button className="spesialists-filter-btn"><Link to="/appointmentsBoard"  state={{
                specialist,
            }}>Записатись на прийом</Link></button>
            <img className="spesialist-like" src={Like}/>
        </div>
    </div>
    )
}