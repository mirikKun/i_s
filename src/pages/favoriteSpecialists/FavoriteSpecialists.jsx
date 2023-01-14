
import './favoriteSpecialists.css'
import StubImage from './images/specialist.png'
import Like from './images/like.png';
import {Link} from "react-router-dom";

export default function FavoriteSpecialists() {
    return (

        <section className="container content-section">

            <h1 className="section-header">Мої записи</h1>

            <div className="shop-items">
                
                <div className="spesialist">
                    <img className="spesialist-image" src={StubImage}/>
                        <div className="blog-item-details">
                            <span className="spesialist-title">Психотерапія: напрямки, види, методи</span>
                            <span className="spesialist-short">Дізнайтеся, які бувають напрямки, види та методи психотерапії та
                        оберіть свої</span>
                        </div>
                        <div className="spesialist-choose-btn">
                            <button className="spesialists-filter-btn"><Link to="/appointmentsBoard">Записатись на прийом</Link></button>
                            <img className="spesialist-like" src={Like}/>
                        </div>

                </div>


            </div>
        </section>
    )
}