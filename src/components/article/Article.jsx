import "./article.css"
import StubImage from './images/bloImage.png'
import {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import axios from "axios";

export default function Article({article}) {
    const imagePath = "http://localhost:8080/files/"
    const [imageData, setImageData] = useState([])
    useEffect(() => {
        const fetchAppointments = async () => {
            const res = await axios.get(imagePath+article.imageId);
            setImageData(res.data)
        }
        fetchAppointments()
    }, [])
    return (
        <div className="blog-item">
            <img className="blog-article-image" src={"data:image/jpg;base64," + imageData}/>
            <div className="blog-item-details">
                <span className="blog-item-title">{article.title}</span>
                <span className="blog-item-short">{article.previewText}</span>
            </div>
        </div>
    )
}