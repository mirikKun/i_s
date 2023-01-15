import {useContext, useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import axios from "axios";
import SpecialistsList from "../../components/specialistsList/SpecialistsList";
import {Context} from "../../context/Context";
import './specialists.css'


export default function Specialists() {
    const [specialists, setSpecialists] = useState([])
    const {search} = useLocation();
    const { user } = useContext(Context);
    useEffect(() => {
        const fetchSpecialists = async () => {
            const res = await axios.get("/specialists/" + search);
            setSpecialists(res.data)
        }
        fetchSpecialists()     
    }, [search])

    return (
  
            <div>
                <SpecialistsList specialists={specialists}></SpecialistsList>
            </div>
    )
}