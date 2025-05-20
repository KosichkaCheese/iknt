import { useState } from 'react'

export default function NewsAdminItem({ news }) {
    const [editing, setEditing] = useState(null)

    const deleteNews = async (id) => {
        await fetch(`http://localhost:8000/news/${id}`, {
            method: 'DELETE',
            credentials: 'include'
        })
        setNewsList(newsList.filter(n => n.id !== id))
    }

    var path = '/src/assets/' + news.pic
    return (
        <div className="news-item">
            <h2>{news.title}</h2>
            <img src={path}></img>
            <p className="news-date">{new Date(news.date).toLocaleDateString()}</p>
            <p>{news.content}</p>
            <button onClick={() => setEditing(news)}>Редактировать</button>
            <button onClick={() => deleteNews(news.id)}>Удалить</button>
        </div>
    )
}