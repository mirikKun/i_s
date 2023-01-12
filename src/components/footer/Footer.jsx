import "./footer.css"

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
                            <img src="Images/YouTube Logo.png"/>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.spotify.com" target="_blank">
                            <img src="Images/Spotify Logo.png"/>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.facebook.com" target="_blank">
                            <img src="Images/Facebook Logo.png"/>
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    )
}
