import { useState, useEffect } from 'react'

export default function NewsForm({ editing, onSave }) {
    const [formData, setFormData] = useState({
        title: '',
        content: '',
        date: '',
        pic: ''
    })

    const handleCancel = () => {
        onSave(null)
    }

    useEffect(() => {
        if (editing) {
            fetch(`http://localhost:8000/news/${editing.id}`)
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
        const url = editing ? `http://localhost:8000/news/${editing.id}` : 'http://localhost:8000/news'

        const res = await fetch(url, {
            method,
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
            body: JSON.stringify(formData)
        })

        if (res.ok) {
            const data = await res.json()
            onSave(data)
            setFormData({ title: '', content: '', date: '', pic: '' })
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input name="title" value={formData.title} onChange={handleChange} placeholder="Заголовок" required />
            <input name="date" value={formData.date} onChange={handleChange} placeholder="Дата" />
            <input name="pic" value={formData.pic} onChange={handleChange} placeholder="Название файла" />
            <textarea name="content" value={formData.content} onChange={handleChange} placeholder="Текст" required />
            <button type="submit">{editing ? 'Обновить' : 'Добавить'}</button>
            {editing && (
                <button type="button" onClick={handleCancel}>
                    Отмена
                </button>
            )}
        </form>
    )
}
