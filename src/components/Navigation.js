import React, {useState} from "react";
import {NavLink} from "react-router-dom";
import {AiOutlineUser} from "react-icons/ai";
import {useUser} from '../UserContext'

const Navigation = () => {
    const {user, setUser} = useUser()
    const [isHovered, setIsHovered] = useState(false)
    const handleLogin = () => {
        window.location.href = '/login';  // Ou vers '/home' selon votre configuration
    }

    const handleLogout = () => {
        localStorage.removeItem('accessToken');
        window.location.href = '/login';
    }


    return (
        <div className="navigation">
            <div className="en-tete">
                <h3>Name Application</h3>
                {user ? (<div onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}
                              className="compte">
                    <p>{user.nom_user}</p>
                    <AiOutlineUser size={"1.2em"} color="white"/>
                    {isHovered && (<div className={"sub-nave"}>
                        <ul>
                            <li>Mon Compte</li>
                            <li onClick={handleLogout}>Se deconnecter</li>
                        </ul>
                    </div>)}
                </div>) : (<div className="compte">
                    <p onClick={handleLogin}>Se Connecter</p>
                    <AiOutlineUser size={"1.2em"} color="white"/>
                </div>)}

            </div>
            <div className="nav-container">
                <ul>
                    <NavLink
                        to="/home"
                        className={(nav) => (nav.isActive ? "nav-active" : "")}
                    >
                        <li>Home</li>
                    </NavLink>
                    <NavLink
                        to="/info"
                        className={(nav) => (nav.isActive ? "nav-active" : "")}
                    >
                        <li>Informations Clients</li>
                    </NavLink>
                    <NavLink
                        to="panier"
                        className={(nav) => (nav.isActive ? "nav-active" : "")}
                    >
                        <li>Panier</li>
                    </NavLink>
                </ul>
            </div>
        </div>
    );
};

export default Navigation;
