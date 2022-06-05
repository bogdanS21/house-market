import React from 'react'
import { useState, useEffect } from 'react'
import { getAuth } from 'firebase/auth'
import SignIn from './SignIn'



function Profiles() {
    const [user, setUser] = useState(null)
    const auth = getAuth()
    useEffect(() => {
        setUser(auth.currentUser)
    }, [])
    return (
        user ? <h1>{user.displayName}</h1> : <h1>Not logged in. Try sign in <SignIn /></h1>
    )
}

export default Profiles