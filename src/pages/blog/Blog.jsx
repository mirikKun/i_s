import {useContext, useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import axios from "axios";
import Articles from "../../components/articles/Articles";
import {Context} from "../../context/Context";
import './blog.css'


export default function Blog() {
    const [articles, setArticles] = useState([])
    const {search} = useLocation();
    const { user } = useContext(Context);
    useEffect(() => {
        const fetchArticles = async () => {
            const res = await axios.get("/articles/" + search);
            setArticles(res.data)
        }
        fetchArticles()
    }, [search])

    return (
        <section className="container content-section">
            <h2 className="section-header">Блог</h2>
            <div className="shop-items">
                <Articles articles={articles}></Articles>
            </div>
        </section>
    )
}