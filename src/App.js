import React, {useContext} from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";

import TopBar from "./components/topbar/TopBar";
import {Context} from "./context/Context";
import Home from "./pages/home/Home"
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Footer from "./components/footer/Footer";
import Blog from "./pages/blog/Blog";
import AboutUs from "./pages/aboutUs/AboutUs";
import Support from "./pages/support/Support";
import Specialists from "./pages/specialists/Specialists";
import FavoriteSpecialists from "./pages/favoriteSpecialists/FavoriteSpecialists";
import AppointmentsBoard from "./pages/appointmentsBoard/AppointmentsBoard";
import Appointments from "./pages/appointments/Appointments";
import Profile from "./pages/profile/Profile";
import CreateAppointment from "./pages/createAppointment/CreateAppointment";
import axios from "axios";
axios.defaults.baseURL = 'http://backend:8080';
function App() {
    const {user} = useContext(Context);
    return (
        <Router>
            <TopBar/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/blog' element={<Blog/>}/>
                <Route path='/register' element={user ? <Home/> : <Register/>}/>
                <Route path='/login' element={user ? <Home/> : <Login/>}/>
                <Route path='/aboutUs' element={<AboutUs/>}/>
                <Route path='/specialists' element={<Specialists/>}/>
                <Route path='/support' element={<Support/>}/>
                <Route path='/favoriteSpecialist' element={user ? <FavoriteSpecialists/> : <Home/>}/>
                <Route path='/profile' element={user ? <Profile/> : <Home/>}/>
                <Route path='/appointmentsBoard' element={user ? <AppointmentsBoard/> : <Home/>}/>
                <Route path='/myAppointments' element={user ? <Appointments/> : <Home/>}/>
                <Route path='/createAppointment' element={user ? <CreateAppointment/> : <Home/>}/>

            </Routes>
            <Footer/>
        </Router>
    );
}

export default App;
