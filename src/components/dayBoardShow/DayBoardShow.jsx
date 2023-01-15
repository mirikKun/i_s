import "./dayBoardShow.css"
import StubImage from './images/bloImage.png'
import {useContext, useEffect, useState} from "react";
import {Context} from "../../context/Context";
import axios from "axios";
import Specialist from "../specialist/Specialist";
import {useLocation} from "react-router-dom";

export default function DayBoardShow({specialist,curDate}) {
    console.log(curDate.toLocaleString())
    const imagePath = "http://localhost:8080/images/"

    const {search} = useLocation();
    const {user} = useContext(Context);


    const [appointments, setAppointments] = useState([])
    useEffect(() => {
        const fetchSpecialists = async () => {
            const res = await axios.get("/appointments/by/date/" +specialist.id + search, {
                headers: {
                    'Authorization': 'Bearer ' + user.token
                }
                ,params:{dateTime:curDate.toISOString()}
            });
            setAppointments(res.data)
        }
        fetchSpecialists()
    }, [search])
    return (
        <div className="appointment-day">

            <p className="day-header">{curDate.toLocaleDateString('uk-UA', {
                day: "numeric",
                month: "numeric",
                year: "numeric"
            })}</p>

       
            <div className="day-times-holder">
                {
                    appointments.map(appointment => (
                        <p className="day-time">{
                            new Date(Date.parse(appointment.dateTime)).getHours()+ ':' +new Date(Date.parse(appointment.dateTime)).getMinutes()
                        }</p>

                    ))
                }
            </div>
        </div>
    )
}