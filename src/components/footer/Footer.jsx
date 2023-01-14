import "./footer.css"
import YouTubeLogo from "./images/Youtube Logo.png"
import TelegramLogo from "./images/telegram.png"
import FacebookLogo from "./images/Facebook Logo.png";

export default function Footer() {
    return (
        <footer className="main-footer">
            <div className="container main-footer-container">
                <div>
                    <ul>
                        <p className="footer-info-text">Контакти:</p>
                        <p className="footer-info-text">Тел. +38 (096) 123-45-67</p>
                        <p className="footer-info-text">Ел. пошта : psyhelp@gmail.com</p>
                        <p className="footer-info-text">Вул. Польова, 73, м. Київ, 02000</p>

                    </ul>
                </div>
                <ul className="nav footer-nav">
                    <li>
                        <a href="https://www.youtube.com" target="_blank">
                            <img src={YouTubeLogo}/>
                        </a>
                    </li>
                    <li>
                        <a href="https://web.telegram.org/" target="_blank">
                            <img src={TelegramLogo}/>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.facebook.com" target="_blank">
                            <img src={FacebookLogo}/>
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    )
}