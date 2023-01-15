import "./dayBoardCreate.css"
import StubImage from './images/bloImage.png'
import {useContext, useEffect, useState} from "react";
import {Context} from "../../context/Context";
import axios from "axios";
import Specialist from "../specialist/Specialist";
import {useLocation} from "react-router-dom";

export default function DayBoardCreate({curDate}) {
    const imagePath = "http://localhost:8080/images/"

    const {dispatch, isFetching} = useContext(Context);
    const {search} = useLocation();
    const [dateTime, setDateTime] = useState("");
    const {user} = useContext(Context);

    const [email, setEmail] = useState("");


    const handleSubmit = async (event) => {

        event.preventDefault();
        try {
            const res = await axios.post("/appointments/", {
                    email,
                    curDate+dateTime
                }
                , {
                    headers: {
                        'Authorization': 'Bearer ' + user.token
                    }
                });
            res.data &&  setSuccess(true);

        } catch (err) {
            setError(true);
        }


    }
    const [appointments, setAppointments] = useState([])
    useEffect(() => {
        const fetchSpecialists = async () => {
            const res = await axios.get("/specialists/" + search);
            setAppointments(res.data)
        }
        fetchSpecialists()
    }, [search])
    return (
        <div className="appointment-day-create">
            <p className="day-header">{curDate}</p>

            <form className="registerForm" onSubmit={handleSubmit}>

            <input className="time" onChange={event => setDateTime(event.target.value)} type="time" id="appt" name="appt"
                   min="09:00" max="18:00" required />
            <button type="submit" disabled={isFetching}  className="day-time-create-btn">Створити</button>

            </form>

            <div className="day-times-holder">
                {appointments.map(appointment => (
                    <p className="day-time">{new Date(Date.parse(appointment.dateTime)).toLocaleDateString('uk-UA', {
                        hour: "numeric",
                        minute: "numeric"
                    })}</p>

                ))}
            </div>
        </div>
    )
}