import { useEffect, useState } from 'react'
import NewsForm from '../../components/NewsForm'
import NewsItem from '../../components/NewsItem'

export default function AdminHome() {
    const [newsList, setNewsList] = useState([])
    const [editing, setEditing] = useState(null)

    useEffect(() => {
        fetch('http://localhost:8000/news')
            .then(res => res.json())
            .then(data => setNewsList(data))
    }, [])

    const deleteNews = async (id) => {
        await fetch(`http://localhost:8000/news/${id}`, {
            method: 'DELETE',
            credentials: 'include'
        })
        setNewsList(newsList.filter(n => n.id !== id))
    }

    return (
        <div>
            <h1 style={{ marginLeft: '5%', fontSize: '40px' }}>Новости факультета</h1>
            <NewsForm
                editing={editing}
                onSave={(news) => {
                    if (news === null) {
                        setEditing(null)
                    }
                    else if (editing) {
                        setNewsList(newsList.map(n => n.id === news.id ? news : n))
                    } else {
                        setNewsList([...newsList, news])
                    }
                    setEditing(null)
                }}
            />
            <div className="news-grid">
                {newsList.map(news => (
                    <div key={news.id} className="news-admin-item">
                        <NewsItem news={news} />
                        <div className="admin-buttons">
                            <button onClick={() => { setEditing(news); window.scrollTo({ top: 0, behavior: 'smooth' }) }}>Редактировать</button>
                            <button onClick={() => deleteNews(news.id)}>Удалить</button>
                        </div>
                    </div>
                ))}
            </div>
            {/* <div className='admin-ul'>
                <ul>
                    {newsList.map(news => (
                        <li key={news.id}>
                            {news.title}
                            <button onClick={() => setEditing(news)}>Редактировать</button>
                            <button onClick={() => deleteNews(news.id)}>Удалить</button>
                        </li>
                    ))}
                </ul>
            </div> */}
        </div>
    )
}