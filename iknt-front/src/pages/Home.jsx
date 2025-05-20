import NewsItem from '../components/NewsItem'
import { useEffect, useState } from 'react'

export default function Home() {
    const [newsList, setnewsList] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        fetch('http://localhost:8000/news/')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Ошибка загрузки данных')
                }
                return response.json()
            })
            .then(data => {
                setnewsList(data)
                setLoading(false)
            })
            .catch(err => {
                setError(err.message)
                setLoading(false)
            })
    }, [])

    if (loading) return <p>Загрузка...</p>
    if (error) return <p>Ошибка: {error}</p>


    return (
        <div className='home'>
            <h1>Новости факультета</h1>
            <div className="news-grid">
                {newsList.map(news => (
                    <NewsItem key={news.id} news={news} />
                ))}
            </div>
        </div>
    )
}