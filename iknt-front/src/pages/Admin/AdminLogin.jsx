import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function AdminLogin() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const handleLogin = async (e) => {
        e.preventDefault()
        const response = await fetch('http://localhost:8000/auth/login', {
            method: 'POST',
            body: new URLSearchParams({ username, password }),
            credentials: 'include'
        })
        if (response.status === 200) {
            navigate('/admin')
        } else {
            alert('Неверные данные')
        }
    }

    return (
        <form onSubmit={handleLogin}>
            <h2>Вход</h2>
            <input value={username} onChange={e => setUsername(e.target.value)} placeholder="Логин" required />
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Пароль" required />
            <button type="submit">Войти</button>
        </form>
    )
}