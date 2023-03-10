import "./dayBoardCreate.css"
import StubImage from './images/bloImage.png'
import {useContext, useEffect, useState} from "react";
import {Context} from "../../context/Context";
import axios from "axios";
import Specialist from "../specialist/Specialist";
import {useLocation} from "react-router-dom";

export default function DayBoardCreate({curDate}) {
    console.log(curDate.toLocaleString())
    const imagePath = "http://localhost:8080/images/"

    const {dispatch, isFetching} = useContext(Context);
    const {search} = useLocation();
    const [dateTime, setDateTime] = useState("");
    const {user} = useContext(Context);

    const [free,setFree] = useState(true);


    const handleSubmit = async (event) => {

        event.preventDefault();
        try {
            const res = await axios.post("/appointments/", {
                    free,
                    dateTime
                }
                , {
                    headers: {
                        'Authorization': 'Bearer ' + user.token
                    }
                });
            res.data && window.location.reload();

        } catch (err) {

        }


    }
    const [appointments, setAppointments] = useState([])
    useEffect(() => {
        const fetchSpecialists = async () => {
            const res = await axios.get("/profile/appointments/by/date"  + search, {
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
        <div className="appointment-day-create">

            <p className="day-header">{curDate.toLocaleDateString('uk-UA', {
                day: "numeric",
                month: "numeric",
                year: "numeric"
            })}</p>

            <form className="registerForm" onSubmit={handleSubmit}>
                <input className="time" onChange={event => setDateTime(new Date(curDate.getTime()+event.target.value.split(':')[0]*1000*60*60+event.target.value.split(':')[1]*1000*60).toISOString())} type="time"
                       id="appt" name="appt"
                       min="09:00" max="18:00" required/>
                <button type="submit" disabled={isFetching} className="day-time-create-btn">????????????????</button>

            </form>

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