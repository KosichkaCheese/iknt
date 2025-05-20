import { useEffect, useState } from 'react'
import TeacherForm from '../../components/TeachersForm'
import TeacherCard from '../../components/TeacherCard'

export default function AdminTeachers() {
    const [teachers, setTeachers] = useState([])
    const [editing, setEditing] = useState(null)

    useEffect(() => {
        fetch('http://localhost:8000/teachers')
            .then(res => res.json())
            .then(data => setTeachers(data))
    }, [])

    const deleteTeacher = async (id) => {
        await fetch(`http://localhost:8000/teachers/${id}`, {
            method: 'DELETE',
            credentials: 'include'
        })
        setTeachers(teachers.filter(t => t.id !== id))
    }

    return (
        <div>
            <h1>Преподаватели</h1>
            <TeacherForm
                editing={editing}
                onSave={(teacher) => {
                    if (teacher === null) {
                        setEditing(null)
                    }
                    else if (editing) {
                        setTeachers(teachers.map(t => t.id === teacher.id ? teacher : t))
                    } else {
                        setTeachers([...teachers, teacher])
                    }
                    setEditing(null)
                }}
            />
            {/* <div className='admin-ul'>
                <ul>
                    {teachers.map(teacher => (
                        <li key={teacher.id}>
                            {teacher.name}
                            <button onClick={() => setEditing(teacher)}>Редактировать</button>
                            <button onClick={() => deleteTeacher(teacher.id)}>Удалить</button>
                        </li>
                    ))}
                </ul>
            </div> */}
            {teachers.map(teacher => (
                <div key={teacher.id} className="teacher-admin-item">
                    <TeacherCard key={teacher.id} teacher={teacher} />
                    <div className="admin-teacher-buttons">
                        <button onClick={() => { setEditing(teacher); window.scrollTo({ top: 0, behavior: 'smooth' }) }}>Редактировать</button>
                        <button onClick={() => deleteTeacher(teacher.id)}>Удалить</button>
                    </div>
                </div>
            ))}
        </div>
    )
}