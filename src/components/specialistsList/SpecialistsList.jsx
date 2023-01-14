import "./specialistsList.css"
import Article from "../article/Article";
import Specialist from "../specialist/Specialist";

export default function SpecialistsList({specialists}) {
    console.log(specialists)
    return (
    <section className="container content-section">
        <div className="filters">
            <ul>

                <li>
                    <button className="spesialists-filter-btn">Підходи</button>
                </li>
                <li>
                    <button className="spesialists-filter-btn">Формат</button>
                </li>
                <li>
                    <button className="spesialists-filter-btn">Тривалість</button>
                </li>
                <li>
                    <button className="spesialists-filter-btn">Стать</button>
                </li>
                <li>
                    <button className="spesialists-filter-btn">Сортування</button>
                </li>

            </ul>
        </div>
        <div className="shop-items">

            {specialists.map(specialist => (
                <Specialist specialist={specialist}/>
            ))}
        </div>
    </section>
        )
}