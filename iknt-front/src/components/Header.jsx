import { Link, useLocation, useNavigate } from 'react-router-dom'

export default function Header() {
    const location = useLocation()
    const navigate = useNavigate()
    const isAdmin = location.pathname.startsWith('/admin')

    const handleLogout = async () => {
        await fetch('http://localhost:8000/auth/logout', {
            method: 'POST',
            credentials: 'include'
        })
        navigate('/admin/login')
    }

    return (
        <header className="site-header">
            <img src="/src/assets/logoIKNT.png" alt="Институт компьютерных наук и технологий"></img>
            <nav>
                <ul className="nav-links">
                    <li>
                        <Link to={isAdmin ? "/admin" : "/"}>Новости</Link>
                    </li>
                    {!isAdmin && (
                        <li>
                            <Link to="/about">О факультете</Link>
                        </li>
                    )}
                    {/* <li><Link to={isAdmin ? "/admin/contacts" : "/contacts"}>Контакты</Link></li> */}
                    <li>
                        <Link to={isAdmin ? "/admin/teachers" : "/teachers"}>Преподаватели</Link>
                    </li>
                    {isAdmin && (
                        <li>
                            <button onClick={handleLogout} className="logout-button">Выйти</button>
                        </li>
                    )}
                </ul>
            </nav>
        </header>
    )
}