import { useEffect, useState } from 'react'

export default function useAuth() {
    const [isAuth, setIsAuth] = useState(null)

    useEffect(() => {
        fetch('http://localhost:8000/auth/check', {
            credentials: 'include',
        })
            .then(res => {
                if (res.status === 200) {
                    setIsAuth(true)
                } else {
                    setIsAuth(false)
                }
            })
            .catch(() => setIsAuth(false))
    }, [])

    return isAuth
}