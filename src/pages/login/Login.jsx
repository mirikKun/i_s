import axios from "axios";
import {useContext, useRef} from "react";
import {Link} from "react-router-dom"
import {Context} from "../../context/Context";
import "./login.css"

export default function Login() {
    const usernameRef = useRef();
    const passwordRef = useRef();
    const {dispatch, isFetching} = useContext(Context);

    const handleSubmit = async (event) => {
        event.preventDefault();
        dispatch({type: "LOGIN_START"});
        try {
            const res = await axios.post("/token", {
                email: usernameRef.current.value,
                password: passwordRef.current.value
            })
            dispatch({type: "LOGIN_SUCCESS", payload: res.data});
            window.location.reload()
        } catch (err) {
            dispatch({type: "LOGIN_FAILURE", error: err});
        }
    }

    return (
        <section className="container content-section">
            <div className="registraition-panel">
                <p>Увійдіть або <Link to="/register">зареєструйтеся</Link>, якщо у вас ще немає профілю.</p>

                <hr/>
                <form onSubmit={handleSubmit}>
                    <label><b>Введіть логін</b></label>
                    <input type="text" ref={usernameRef} placeholder="Введіть пошту" name="login" id="login" required/>
                    <label><b>Введіть пароль</b></label>
                    <input type="password" placeholder="Введіть пароль" ref={passwordRef} name="psw" id="psw" required/>
                    <hr/>
                    <button type="submit" disabled={isFetching} className="registerbtn">Увійти</button>
                </form>
            </div>
            <div className="container signin">
                <p>Забули пароль? <a >Відновити</a>.</p>
            </div>
        </section>

    )
}