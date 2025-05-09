export default function NewsItem({ news }) {
    return (
        <div className="news-item">
            <h2>{news.title}</h2>
            <img src={news.pic}></img>
            <p className="news-date">{news.date}</p>
            <p>{news.content}</p>
        </div>
    )
}