import "./topbar.css"
import {Link, useLocation} from "react-router-dom"
import {Context} from "../../context/Context";
import {useContext, useEffect, useState} from "react";
import axios from "axios";

export default function TopBar() {
    const {user, dispatch} = useContext(Context);

    const handleLogout = () => {
        dispatch({type: "LOGOUT"});
    };

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


    return (
        <header className="main-header">
            <div className="nav main-nav">
                <ul>
                    <li><Link to="/">Головна</Link></li>
                    <li><Link to="/blog">Блог</Link></li>
                    <li><Link to="/specialists">Знайти терапевта</Link></li>

                    {user && profile.role === 'SPECIALIST' && (
                        <li><Link to="/createAppointment">Створити запис</Link></li>
                    )}
                    <li><Link to="/support">Підтримати проект</Link></li>
                    <li><Link to="/aboutUs">Про нас</Link></li>
                </ul>
                {user && (
                    <ul>
                        <li><Link to="/profile">Мій профіль</Link></li>
                        <li><Link to="/myAppointments">Мої прийоми</Link></li>
                        <li><a onClick={handleLogout}>Вийти</a></li>
                    </ul>
                )}
                {!user && window.location.pathname !== "/login" && (
                    <li><Link to="/login">Увійти</Link></li>
                )}
            </div>
        </header>
    )
}