import "./articles.css"
import Article from "../article/Article";

export default function Articles({articles}) {
    return (
        <div className="articles">
            {articles.map(article => (
                <Article article={article}/>
            ))}
        </div>
    )
}