import './appointmentsBoardCreate.css'
import StubImage from './images/specialist.png'
import Like from './images/like.png';
import DayBoardCreate from "../../components/dayBoardCreate/DayBoardCreate";
import {useContext, useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import axios from "axios";
import {Context} from "../../context/Context";

export default function AppointmentsBoardCreate() {

    return (

        <section className="container content-section">

            <h1 className="section-header">Створити розклад на неділю</h1>

            <div className="shop-items">


                <div className="spesialist-appointment-board">
                    <h1 className="section-header">{
                        new Date().toLocaleDateString('uk-UA', {
                            day: "numeric",
                            month: "numeric",
                            year: "numeric"
                        }) + '-' +
                        new Date(Date.now() + 86400000 * 6).toLocaleDateString('uk-UA', {
                            day: "numeric",
                            month: "numeric",
                            year: "numeric"
                        })

                    }</h1>
                    <h1 className="day-header">Введіть час сеансу відповідного дня для його створення</h1>

                    <div className="appointment-day-create-details">
                        <DayBoardCreate curDate={new Date(Date.now()).toLocaleDateString('uk-UA', {
                            day: "numeric",
                            month: "numeric",
                            year: "numeric"
                        })}/>
                        <DayBoardCreate curDate={new Date(Date.now() + 86400000).toLocaleDateString('uk-UA', {
                            day: "numeric",
                            month: "numeric",
                            year: "numeric"
                        })}/>
                        <DayBoardCreate curDate={new Date(Date.now() + 86400000 * 2).toLocaleDateString('uk-UA', {
                            day: "numeric",
                            month: "numeric",
                            year: "numeric"
                        })}/>
                        <DayBoardCreate curDate={new Date(Date.now() + 86400000 * 3).toLocaleDateString('uk-UA', {
                            day: "numeric",
                            month: "numeric",
                            year: "numeric"
                        })}/>
                        <DayBoardCreate curDate={new Date(Date.now() + 86400000 * 4).toLocaleDateString('uk-UA', {
                            day: "numeric",
                            month: "numeric",
                            year: "numeric"
                        })}/>
                        <DayBoardCreate curDate={new Date(Date.now() + 86400000 * 5).toLocaleDateString('uk-UA', {
                            day: "numeric",
                            month: "numeric",
                            year: "numeric"
                        })}/>
                        <DayBoardCreate curDate={new Date(Date.now() + 86400000 * 6).toLocaleDateString('uk-UA', {
                            day: "numeric",
                            month: "numeric",
                            year: "numeric"
                        })}/>

                    </div>
                </div>


            </div>
        </section>
    )
}