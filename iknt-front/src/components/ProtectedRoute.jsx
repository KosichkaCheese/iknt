import { Navigate } from 'react-router-dom'
import useAuth from './UseAuth'

export default function ProtectedRoute({ children }) {
    const isAuth = useAuth()

    if (isAuth === null) return <div>Загрузка...</div>
    return isAuth ? children : <Navigate to="/admin/login" />
}