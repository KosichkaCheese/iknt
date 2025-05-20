import TeacherCard from '../components/TeacherCard'
import { useEffect, useState } from 'react'


export default function Teachers() {
    const [teachers, setTeachers] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        fetch('http://localhost:8000/teachers/')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Ошибка загрузки данных')
                }
                return response.json()
            })
            .then(data => {
                setTeachers(data)
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
        <div className='teachers'>
            <h1>Преподаватели</h1>
            {teachers.map(teacher => <TeacherCard key={teacher.id} teacher={teacher} />)}
        </div>
    )
}