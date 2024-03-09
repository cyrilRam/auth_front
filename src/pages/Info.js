import React, {useEffect, useState} from 'react';
import Navigation from "../components/Navigation";
import {getUser, useUser} from '../UserContext'


const Info = () => {
    const [dataLoad, setDataLoad] = useState(false)
    const {user, setUser} = useUser()
    // const getUser = async () => {
    //     await getIdUserLog()
    //     if (userID) {
    //         try {
    //             const response = await axios.get(`http://localhost:8000/api/getUserInfo?id=${userID}`)
    //             setUserInfo(response.data)
    //             console.log(userInfo)
    //         } catch (error) {
    //             // Gérer les erreurs (par exemple, token expiré)
    //             console.error('Error fetching user info:', error);
    //         }
    //     }
    //     setDataLoad(true)
    // }
    // const getIdUserLog = async () => {
    //     // Récupérez le token depuis le localStorage
    //     const accessToken = localStorage.getItem('accessToken');
    //
    //     // Si le token est présent, effectuez une requête pour obtenir les informations de l'utilisateur
    //     if (accessToken) {
    //         try {
    //             const response = await axios.get(`http://localhost:8000/api/protected-route?token=${accessToken}`)
    //             console.log(response)
    //
    //             // Stockez les informations de l'utilisateur dans le state
    //             setUserID(response.data.user.id_user);
    //         } catch (error) {
    //             // Gérer les erreurs (par exemple, token expiré)
    //             console.error('Error fetching user info:', error);
    //         }
    //
    //
    //     } else {
    //         // Redirigez l'utilisateur vers la page de connexion s'il n'est pas connecté
    //         window.location.href = '/login';
    //     }
    //
    // }


    useEffect(() => {
        getUser(user, setUser)
    }, [dataLoad]); // Effectué une seule fois lors du montage du composant

    const handleLogout = () => {
        // Supprimez le token du localStorage
        localStorage.removeItem('accessToken');

        // Redirigez l'utilisateur vers la page d'accueil ou de connexion
        window.location.href = '/login';  // Ou vers '/home' selon votre configuration
    };


    return (
        <div>
            <Navigation/>
            <h2>Dashboard</h2>
            {user && (
                <div>
                    <p>Welcome, {user.nom_user}!</p>
                    {/* Affichez d'autres informations de l'utilisateur ici */}
                </div>
            )}
            {/* Bouton de déconnexion */}
            <button onClick={handleLogout}>Déconnexion</button>

        </div>
    );
};

export default Info;