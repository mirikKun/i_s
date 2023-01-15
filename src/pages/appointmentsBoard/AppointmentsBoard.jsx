import './appointmentsBoard.css'
import StubImage from './images/specialist.png'
import Like from './images/like.png';
import DayBoardCreate from "../../components/dayBoardCreate/DayBoardCreate";
import DayBoardShow from "../../components/dayBoardShow/DayBoardShow";
import {useLocation} from "react-router-dom";

export default function AppointmentsBoard() {


    const location = useLocation()

    if (location.state.specialist) {
        console.log(location.state.specialist);
        // { id: '...', images: [...], price: { ... } }
    }

    var startOfDay = new Date(new Date().setHours(2, 0, 0, 0)).getTime()
    return (

        <section className="container content-section">

            <h1 className="section-header">Розклад прийомів</h1>

            <div className="shop-items">


                <div className="spesialist-appointment">
                    <div className="spesialist-details">
                        <img className="spesialist-appointment-image" src={StubImage}/>
                        <div className="blog-item-details">
                            <span className="spesialist-title">{location.state.specialist.name}</span>
                            <span className="spesialist-short">5 років досвідуо</span>
                            {location.state.specialist.specializations.map(specialization => (
                                <span className="spesialist-short">{specialization.name}</span>
                            ))}
                        </div>
                        <div className="spesialist-choose-btn">
                            <img className="spesialist-like" src={Like}/>

                        </div>

                    </div>
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

                    <div className="spesialist-details">
                        <DayBoardShow specialist={location.state.specialist} curDate={new Date(startOfDay)}/>
                        <DayBoardShow specialist={location.state.specialist} curDate={new Date(startOfDay + 86400000)}/>
                        <DayBoardShow specialist={location.state.specialist} curDate={new Date(startOfDay + 86400000 * 2)}/>
                        <DayBoardShow specialist={location.state.specialist} curDate={new Date(startOfDay + 86400000 * 3)}/>
                        <DayBoardShow specialist={location.state.specialist} curDate={new Date(startOfDay + 86400000 * 4)}/>
                        <DayBoardShow specialist={location.state.specialist} curDate={new Date(startOfDay + 86400000 * 5)}/>
                        <DayBoardShow specialist={location.state.specialist} curDate={new Date(startOfDay + 86400000 * 6)}/>

                    </div>
                </div>


            </div>
        </section>
    )
}