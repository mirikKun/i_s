import {useContext, useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import axios from "axios";
import {Context} from "../../context/Context";
import './appointments.css'
import AppointmentsList from "../../components/appointmentsList/AppointmentsList";


export default function Appointments() {
    const [appointments, setAppointments] = useState([])
    const {search} = useLocation();
    const {user} = useContext(Context);
    console.log(user);
    useEffect(() => {
        const fetchAppointments = async () => {
            const res = await axios.get("/profile/appointments" + search, {
                headers: {
                    'Authorization': 'Bearer ' +user.token
                }
            });
            setAppointments(res.data)
        }
        fetchAppointments()
    }, [search])

    return (

        <div>
            <AppointmentsList appointments={appointments}></AppointmentsList>
        </div>
    )
}