import "./header.css"
import {cloneElement, useState} from "react";
import {Link} from "react-router-dom";

export default function Header() {
    return (
        <header className="main-header">
            <div className="nav main-nav">
                <ul>
                    <li><a href="accountChange.html">Мій профіль</a></li>
                    <li><a href="appointment.html">Мої прийоми</a></li>
                    <li><a href="favorite-specialists.html">Вибрані терапевти</a></li>
                    <li><a href="registration.html">Вийти</a></li>
                    <li><a href="about.html">Головна</a></li>
                    <li><a href="blog.html">Блог</a></li>
                    <li><a href="specialists.html">Знайти терапевта</a></li>
                    <li><a href="about.html">Терапевтам</a></li>
                    <li><a href="support.html">Підтримати проект</a></li>
                    <li><a href="aboutUs.html">Про нас</a></li>
                    <li><a ><Link  to="/login">>Увійти</Link></a></li>

                </ul>
            </div>
        </header>
    )
}
