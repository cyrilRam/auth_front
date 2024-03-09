import { create } from "zustand";
import axios from "axios";

export const useUserStore = create((set) => ({
  user: null,
  setUser: (newUser) => set({ user: newUser }),
}));

export const getUser = async (navigate) => {
  // Récupérez le token depuis le localStorage
  const accessToken = localStorage.getItem("accessToken");

  // Si le token est présent, effectuez une requête pour obtenir les informations de l'utilisateur
  if (accessToken) {
    try {
      const response = await axios.get(
        `http://localhost:8000/api/get_user_from_token?token=${accessToken}`
      );
      // Stockez les informations de l'utilisateur dans le state
      useUserStore.getState().setUser(response.data.user);
    } catch (error) {
      // Gérer les erreurs (par exemple, token expiré)
      navigate("/login");
    }
  } else {
    // Redirigez l'utilisateur vers la page de connexion s'il n'est pas connecté
    navigate("/login");
  }
};

//au lieu d'init a nulll des qu'on fait un chargement
export const initUserStore = async () => {
  const accessToken = localStorage.getItem("accessToken");

  if (accessToken) {
    try {
      const response = await axios.get(
        `http://localhost:8000/api/get_user_from_token?token=${accessToken}`
      );

      useUserStore.setState({ user: response.data.user });
    } catch (error) {
      // Gérer les erreurs (par exemple, token expiré)
      useUserStore.setState({ user: null });
    }
  } else {
    useUserStore.setState({ user: null });
  }
};
