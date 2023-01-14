import axios from "axios"
import {Link} from "react-router-dom"
import {useContext, useState} from "react"
import {Context} from "../../context/Context";

import "./register.css"

export default function Register() {
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
            res.data && window.location.replace("/login");
        } catch (err) {
            setError(true);
        }
    }
    return (

        <section className="container content-section">

            <div className="registraition-panel">
                <h1>Реєстрація</h1>
                <p>Будь-ласка зоповніть цю форми щоб створити аккаунт.</p>
                <hr/>
                <p>Виберіть одну із опцій.</p>
                
                <label className="toggle">
                    <input className="toggle-checkbox" type="checkbox" onChange={event => setIsSpecialist(!isSpecialist)}/>
                    <div className="toggle-switch"></div>
                    <span
                        className="toggle-label">Я терапевт і хочу надавати психологічну допомогу на волонтерській основі</span>
                </label>
                <hr/>
                <form className="registerForm" onSubmit={handleSubmit}>

                    <label ><b>ПІБ:</b></label>
                    <input type="text" onChange={event => setUsername(event.target.value)} placeholder="Прізвище, ім'я, по батькові" name="name" id="name" required/>

                    <label ><b>Номер телефону:</b></label>
                    <input type="text" onChange={event => setPhoneNumber(event.target.value)} placeholder="Номер телефону" name="phone-number" id="phone-number" required/>

                    <label ><b>Електронна пошта</b></label>
                    <input type="text" onChange={event => setEmail(event.target.value)} placeholder="Електронна пошта" name="email" id="email" required/>

                    <label ><b>Введіть пароль</b></label>
                    <input type="password" onChange={event => setPassword(event.target.value)} placeholder="Введіть пароль" name="psw" id="psw" required/>

                    <p>Створюючи аккаунт ви погоджуєтесь з <a href="#">умовами та конфіденційністю</a>.</p>

                    <button type="submit" disabled={isFetching}  className="registerbtn">Зареєструватися</button>

                </form>

                <div className="container signin">
                    <p>Вже є аккаунт? <Link to="/login">Увійти</Link>.</p>
                </div>
                {error && <span>Something went wrong!</span>}
            </div>
        </section>


    )
}