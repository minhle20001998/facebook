import React, { useContext, useState } from 'react'
import jwt_decode from 'jwt-decode'
const UserContext = React.createContext();
const UserUpdateContext = React.createContext();

export function useUser() {
    return useContext(UserContext)
}

export function useUserUpdate() {
    return useContext(UserUpdateContext)
}

export function UserProvider({ children }) {
    const userInfo = localStorage.getItem('token') ? jwt_decode(localStorage.getItem('token')) : null
    const [user, setUser] = useState(userInfo)

    function setUserDetail() {
        setUser(userInfo)
    }

    return (
        <UserContext.Provider value={user}>
            <UserUpdateContext.Provider value={setUserDetail}>
                {children}
            </UserUpdateContext.Provider>
        </UserContext.Provider>
    )
}
