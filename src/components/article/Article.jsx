import "./article.css"
import StubImage from './images/bloImage.png'

export default function Article({article}) {
    const imagePath = "http://localhost:8080/images/"
    return (
        <div className="blog-item">
            <img className="blog-item-image" src={StubImage}/>
            <div className="blog-item-details">
                <span className="blog-item-title">{article.title}</span>
                <span className="blog-item-short">{article.previewText}</span>
            </div>
        </div>
    )
}