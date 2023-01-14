import "./appointment.css"
import {Link, useLocation} from "react-router-dom";
import StubImage from './images/specialist.png'
import Like from './images/like.png';
import {useContext, useEffect, useState} from "react";
import axios from "axios";
import {Context} from "../../context/Context";

export default function Appointment({appointment}) {
    const [specialist, setSpecialist] = useState([])
    const {search} = useLocation();
    const {user} = useContext(Context);

    console.log(1)
    useEffect(() => {
        console.log(2)

        const fetchSpecialists = async () => {
            console.log(3)

            const res = await axios.get("/specialists/" + appointment.specialistId + search);
            setSpecialist(res.data)
        }
        fetchSpecialists()
    }, [search])

    return (
        <div className="spesialist">
            <img className="spesialist-image" src={StubImage}/>
            <div className="blog-item-details">
                <span className="spesialist-title">{specialist.name}</span>
                <span className="spesialist-short">5 років досвіду</span>
            </div>
            <div className="spesialist-choose-btn">
                <button
                    className="spesialists-sign-btn">{new Date(Date.parse(appointment.dateTime)).toLocaleString('uk-UA')}</button>
                <img className="spesialist-like" src={Like}/>
                <button className="spesialists-data-btn">Скасувати прийом</button>
            </div>
        </div>
    )
}