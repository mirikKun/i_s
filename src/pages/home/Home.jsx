import "./home.css"
import Sun from './images/sun.png';

export default function Home() {
    return (
        <>
            <section className="content-section container">
                <div>
                    <img className="fist-about-image" src={Sun}/>
                        <p className="section-header">Не терпіть!</p>
                        <p className="section-header">Зверніться по допомогу вже сьогодні!</p>
                        <p className="section-header">Знайдіть терапевта, який вас розуміє.</p>
                </div>
                <div>
                    <img className="second-about-image" src={Sun}/>
                        <p>Клінічними симптомами ПТСР є:</p>
                        <ul>
                            <li>тривожно-фобічні стани;</li>
                            <li>постійні занурення в події минулого;</li>
                            <li>нав'язливі спогади;</li>
                            <li>порушення пам'яті та розлади сну;</li>
                            <li>апатія, небажання жити;</li>
                            <li>відчуття напруги та тривоги;</li>
                            <li>асоціальна поведінка;</li>
                            <li>будь-які ознаки виснаження ЦНС.</li>
                        </ul>
                        <p>Якщо ви страждаєте від будь-якого з цих симптомів, зверніться по психологічну допомогу.</p>
                        <p className="middle-text">Питання та відповіді.</p>
                        <ul>
                            <p>Як записатись на прийом?</p>
                            <p>Як обрати спеціаліста?</p>
                            <p>Як відбувається перша сесія?</p>
                        </ul>
                </div>
            </section>
        </>
    )
}