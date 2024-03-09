import React, {createContext, useContext, useState} from "react";
import axios from "axios";

const userContext = createContext();

export const UserProvider = ({children}) => {
    const [user, setUser] = useState(null);
    return (
        <userContext.Provider value={{user, setUser}}>{children}</userContext.Provider>
    )
}

export const useUser = () => {
    return useContext(userContext)
}

export const getUser = async (user, setUser) => {
    const accessToken = localStorage.getItem('accessToken');
    if (!user && accessToken) {
        try {
            const response = await axios.get(`http://localhost:8000/api/get_user_from_token?token=${accessToken}`)
            console.log(response)
            // Stockez les informations de l'utilisateur dans le state
            setUser(response.data.user)
            console.log(user)
        } catch (error) {
            // Gérer les erreurs (par exemple, token expiré)
            console.error('Error fetching user info:', error);
            console.log(error)
            window.location.href = '/login';
        }

    } else if (!user && !accessToken) {
        window.location.href = '/login';
    }
}
