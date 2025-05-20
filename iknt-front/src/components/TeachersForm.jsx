import { useState, useEffect } from 'react'

export default function TeacherForm({ editing, onSave }) {
    const [formData, setFormData] = useState({
        name: '',
        title: '',
        email: '',
        pic: ''
    })

    useEffect(() => {
        if (editing) {
            fetch(`http://localhost:8000/teachers/${editing.id}`)
                .then(res => res.json())
                .then(data => setFormData(data))
        }
    }, [editing])

    const handleChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = async e => {
        e.preventDefault()
        const method = editing ? 'PUT' : 'POST'
        const url = editing ? `http://localhost:8000/teachers/${editing.id}` : `http://localhost:8000/teachers`

        const res = await fetch(url, {
            method,
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
            body: JSON.stringify(formData)
        })

        if (res.ok) {
            const data = await res.json()
            onSave(data)
            setFormData({ name: '', title: '', email: '', pic: '' })
        }
    }

    const handleCancel = () => {
        setFormData({ name: '', title: '', email: '', pic: '' })
        onSave(null)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input name="name" value={formData.name} onChange={handleChange} placeholder="ФИО" required />
            <input name="title" value={formData.title} onChange={handleChange} placeholder="Должность / Учёная степень" required />
            <input name="email" value={formData.email} onChange={handleChange} placeholder="Email" />
            <input name="pic" value={formData.pic} onChange={handleChange} placeholder="Путь к изображению" />
            <button type="submit">{editing ? 'Обновить' : 'Добавить'}</button>
            {editing && (
                <button type="button" onClick={handleCancel}>
                    Отмена
                </button>
            )}
        </form>
    )
}