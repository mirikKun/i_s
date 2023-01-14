import "./appointmentsList.css"
import Appointment from "../appointment/Appointment";

export default function AppointmentsList({appointments}) {
    console.log(appointments)
    return (
        <section className="container content-section">
            <div className="shop-items">

                {appointments.map(appointment => (
                    <Appointment appointment={appointment}/>
                ))}
            </div>
        </section>
    )
}