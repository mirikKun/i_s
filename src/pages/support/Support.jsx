import {useContext, useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import axios from "axios";
import {Context} from "../../context/Context";
import './support.css'
import Help from './images/help.png';

export default function Support() {
   
    return (
        <section className="container content-section">

            <div>

                <p className="section-header">Якщо ви поділяєте наші цінності і вважаєте нашу мету важливою - ви можете
                    підтримати наш проєкт
                    фінансово.</p>
                <p className="section-header">Patreon - https://www.patreon.com/en-GB (якщо хтось має патреон, можете
                    свій вставити).</p>
                <img className="central-image" src={Help}/>
            </div>
        </section>
    )
}