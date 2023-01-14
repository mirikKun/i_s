
import './appointmentsBoard.css'
import StubImage from './images/specialist.png'
import Like from './images/like.png';

export default function AppointmentsBoard() {

    return (

        <section className="container content-section">

            <h1 className="section-header">Записатись на прийом</h1>

            <div className="shop-items">


                <div className="spesialist-appointment">
                    <div className="spesialist-details">
                        <img className="spesialist-appointment-image" src={StubImage}/>
                            <div className="blog-item-details">
                                <span className="spesialist-title">Психотерапія: напрямки, види, методи</span>
                                <span className="spesialist-short">Дізнайтеся, які бувають напрямки, види та методи психотерапії та
                            оберіть свої</span>
                            </div>
                            <div className="spesialist-choose-btn">
                                <img className="spesialist-like" src={Like}/>

                            </div>

                    </div>
                    <h1 className="section-header">26.12.2022-01.01.2023</h1>

                    <div className="spesialist-details">
                        <div className="appointment-day">
                            <p className="day-header">26.12.2022</p>
                            <p className="day-time">14:00</p>
                        </div>
                        <div className="appointment-day">
                            <p className="day-header">26.12.2022</p>
                            <p className="day-time">14:00</p>
                            <p className="day-time">15:00</p>
                        </div>
                        <div className="appointment-day">
                            <p className="day-header">26.12.2022</p>
                            <p className="day-time">14:00</p>
                            <p className="day-time">15:00</p>
                        </div>
                        <div className="appointment-day">
                            <p className="day-header">26.12.2022</p>

                        </div>
                        <div className="appointment-day">
                            <p className="day-header">26.12.2022</p>
                            <p className="day-time">15:00</p>
                        </div>
                        <div className="appointment-day">
                            <p className="day-header">26.12.2022</p>
                            <p className="day-time">14:00</p>
                            <p className="day-time">15:00</p>
                        </div>
                        <div className="appointment-day">
                            <p className="day-header">26.12.2022</p>
                            <p className="day-time">15:00</p>
                        </div>
                    </div>
                </div>


            </div>
        </section>
    )
}