import "./header.css"

export default function Header() {
    return (
        <header className="main-header">
            <div className="nav main-nav">
                <ul>
                    <div className="dropdown">
                        <button onClick="myFunction()" className="dropbtn ">Вхід або регістрація</button>
                        <div id="myDropdown" className="dropdown-content">
                            <a href="accountChange.html">Мій профіль</a>
                            <a href="appointment.html">Мої прийоми</a>
                            <a href="favorite-specialists.html">Вибрані терапевти</a>
                            <a href="registration.html">Вийти</a>

                        </div>
                    </div>
                    <li><a href="about.html">Головна</a></li>
                    <li><a href="blog.html">Блог</a></li>
                    <li><a href="specialists.html">Знайти терапевта</a></li>
                    <li><a href="about.html">Терапевтам</a></li>
                    <li><a href="support.html">Підтримати проект</a></li>
                    <li><a href="aboutUs.html">Про нас</a></li>
                </ul>
            </div>
        </header>
    )
}
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}