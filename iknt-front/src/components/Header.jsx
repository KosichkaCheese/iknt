import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <header className="site-header">
            <h1>Факультет Информатики</h1>
            <nav>
                <ul className="nav-links">
                    <li><Link to="/">Новости</Link></li>
                    <li><Link to="/about">О факультете</Link></li>
                    <li><Link to="/contacts">Контакты</Link></li>
                    <li><Link to="/teachers">Преподаватели</Link></li>
                </ul>
            </nav>
        </header>
    )
}