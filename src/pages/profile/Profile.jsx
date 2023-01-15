import axios from "axios"
import {Link, useLocation} from "react-router-dom"
import {useContext, useEffect, useState} from "react"
import {Context} from "../../context/Context";
import Photo from './images/photo.png';

import "./profile.css"

export default function Profile() {
    const {user} = useContext(Context);
    const [profile, setProfile] = useState([])
    const {search} = useLocation();
    useEffect(() => {
        const fetchAppointments = async () => {
            const res = await axios.get("/profile/" + search, {
                headers: {
                    'Authorization': 'Bearer ' + user.token
                }
            });
            setProfile(res.data)
        }
        fetchAppointments()
    }, [search])
    const [name, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [error, setError] = useState(false);


    const handleSubmit = async (event) => {

        event.preventDefault();
        try {
            const res = await axios.put("/profile/", {
                name,
                email,
                phoneNumber
            }, {    
                headers: {
                    'Authorization': 'Bearer ' + user.token
                }});
            res.data && window.location.reload();
        } catch (err) {
            setError(true);
        }
    }

 
    return (

        <section className="container content-section">
            <div className="registraition-image">
                <img src={Photo}/>
                    <p className="section-text">Вставити фото</p>
            </div>


            <form className="registraition-panel" onSubmit={handleSubmit}>
                <h1>Налаштування аккуанта</h1>
                <hr/>

                <label ><b>ПІБ:</b></label>
                <input type="text" onChange={event => setUsername(event.target.value)} placeholder={profile.name} name="name" id="name" required/>

                <label ><b>Номер телефону:</b></label>
                <input type="text" onChange={event => setPhoneNumber(event.target.value)} placeholder={profile.phoneNumber} name="phone-number" id="phone-number" required/>

                <label ><b>Ел. пошта</b></label>
                <input type="text" onChange={event => setEmail(event.target.value)} placeholder={profile.email} name="email" id="email" required/>

                <button type="submit" className="registerbtn">Зберегти зміни</button>
            </form>
        </section>


)
}