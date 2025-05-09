import NewsItem from '../components/NewsItem'

const newsList = [
    { id: 1, title: 'Открытие нового лабораторного комплекса', date: '2025-05-01', content: 'Открылась новая лаборатория ИИ...' },
    { id: 2, title: 'День открытых дверей', date: '2025-04-15', content: 'Приглашаем абитуриентов на день открытых дверей.' }
]

export default function Home() {
    return (
        <div>
            <h1>Новости факультета</h1>
            {newsList.map(news => <NewsItem key={news.id} news={news} />)}
        </div>
    )
}