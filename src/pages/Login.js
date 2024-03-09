// Login.js (votre composant React pour la page de connexion)

import React, {useState} from 'react';
import axios from 'axios';
import {useUser} from '../UserContext'

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const {user, setUser} = useUser()

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            console.log(username)
            console.log(password)
            const response = await axios.post(`http://localhost:8000/api/token?username=${username}&password=${password}`);
            const accessToken = response.data.access_token;
            const user_obj = response.data.user_object

            await setUser(user_obj)
            console.log(user)

            // await setUser(response.data.user_object)
            // console.log(response.data.user_object)
            // // Stockez le token dans le localStorage ou utilisez une autre méthode de stockage sécurisée
            // localStorage.setItem('accessToken', accessToken);
            // await setUser(response.data.user_object)
            // console.log(user)
            // Redirigez l'utilisateur vers la page avec les informations

            // setTimeout(() => {
            // window.location.href = '/home';
            // }, 300000)
        } catch (error) {
            console.log(error)
            setErrorMessage('Invalid credentials');
        }
    };

    const handleCreateUser = () => {
        window.location.href = '/CreateUser';

    }


    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <label>
                    Username:
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)}/>
                </label>
                <br/>
                <label>
                    Password:
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                </label>
                <br/>
                <button type="submit">Login</button>
                {errorMessage && <p style={{color: 'red'}}>{errorMessage}</p>}
                {/* Create User */}
                <button onClick={handleCreateUser}>Create User</button>
            </form>
        </div>
    );
};

export default Login;
