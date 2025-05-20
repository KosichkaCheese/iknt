export default function NewsItem({ news }) {
    var path = '/src/assets/' + news.pic
    return (
        <div className="news-item">
            <h2>{news.title}</h2>
            <img src={path}></img>
            <p className="news-date">{new Date(news.date).toLocaleDateString()}</p>
            <p>{news.content}</p>
        </div>
    )
}