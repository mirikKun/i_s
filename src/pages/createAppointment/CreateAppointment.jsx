import axios from "axios";
import {useContext, useRef, useState} from "react";
import {Link} from "react-router-dom"
import {Context} from "../../context/Context";
import "./createAppointment.css"

export default function CreateAppointment() {
    const usernameRef = useRef();
    const passwordRef = useRef();
    const {dispatch, isFetching} = useContext(Context);
    const {user} = useContext(Context);

    const [email, setEmail] = useState("");
    const [dateTime, setDateTime] = useState("");
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleSubmit = async (event) => {

        event.preventDefault();
        try {
            const res = await axios.post("/appointments/", {
                    email,
                    dateTime
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

    return (
        <section className="container content-section">
            <div className="registraition-panel">
                <p>Введіть дані про запис.</p>

                <hr/>
                <form onSubmit={handleSubmit}>
                    <label><b>Введіть пошту</b></label>
                    <input type="text" onChange={event => setEmail(event.target.value)} ref={usernameRef}
                           placeholder="Введіть пошту" name="email" id="email" required/>
                    <label><b>Введіть час </b></label>
                    <br></br>
                    <input type="datetime-local" className="dateField" onChange={event => setDateTime(event.target.value)} required/>
                    <hr/>
                    <button type="submit" disabled={isFetching} className="registerbtn">Створити запис</button>
                </form>
                {error && <span>Щось вішло не так!</span>}
                {success && <span>Запис створений!</span>}

            </div>
        </section>

    )
}