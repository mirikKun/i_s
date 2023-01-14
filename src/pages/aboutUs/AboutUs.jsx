import {useContext, useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import axios from "axios";
import {Context} from "../../context/Context";
import './aboutUs.css'
import Ukraine from './images/ukraine.png';


export default function AboutUs() {

    return (
        <section className="container content-section">

            <div>

                <p className="section-text">Name_of_platform - це нова платформа для надання безоплатної допомоги
                    українським
                    військовим, створена ініціативною молоддю на волонтерській основі. Якщо ви український військовий,
                    то
                    тут ви можете безкоштовно записатись на прийом та отримати психологічну допомогу. </p>
                <p className="section-text">Якщо ви психотерапевт, ви можете надавати свої послуги на волонтерській
                    основі.
                    Якщо ви жертводавець, ви можете підтримати проєкт фінансово.</p>
                <p className="section-text">Наша мета - допомогати нашим захисникам повертатись до цивільного життя
                    після
                    жахіть війни.</p>

                <p className="section-text">Слава Україні!</p>

                <img className="central-image" src={Ukraine}/>
            </div>
        </section>

)
}