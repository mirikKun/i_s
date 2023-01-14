import axios from "axios"
import {Link} from "react-router-dom"
import {useContext, useState} from "react"
import {Context} from "../../context/Context";
import Photo from './images/photo.png';

import "./profile.css"

export default function Profile() {
    const {dispatch, isFetching} = useContext(Context);

    const [name, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [isSpecialist, setIsSpecialist] = useState(false);
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);

    const handleSubmit = async (event) => {

        event.preventDefault();
        try {
            const res = await axios.post("/registration/", {
                name,
                email,
                password,
                phoneNumber,
                isSpecialist
            });
            console.log(isSpecialist);
            //res.data && window.location.replace("/login");
        } catch (err) {
            setError(true);
        }
    }
    return (

        <section class="container content-section">
            <div class="registraition-image">
                <img src={Photo}/>
                    <p class="section-text">Вставити фото</p>
            </div>


            <form class="registraition-panel" onSubmit={handleSubmit}>
                <h1>Налаштування аккуанта</h1>
                <hr/>

                <label ><b>ПІБ:</b></label>
                <input type="text" placeholder="Андрій Андрієв Андрійович" name="name" id="name" required/>

                <label ><b>Номер телефону:</b></label>
                <input type="text" placeholder="+ 38 0(96) 321 54 76" name="phone-number" id="phone-number" required/>

                <label ><b>Ел. пошта</b></label>
                <input type="text" placeholder="andrii_andriev@gmail.com" name="email" id="email" required/>

                <label ><b>Введіть старий пароль</b></label>
                <input type="password" placeholder="Введіть старий пароль" name="psw-old" id="psw-old" required/>


                <label ><b>Введіть новий пароль</b></label>
                <input type="password" placeholder="Введіть новий пароль" name="psw" id="psw" required/>

                <label ><b>Повторіть новий пароль</b></label>
                <input type="password" placeholder="Повторіть новий пароль" name="psw-repeat" id="psw-repeat" required/>
                <hr/>


                <button type="submit" class="registerbtn">Зберегти зміни</button>
            </form>
        </section>


)
}