import axios from 'axios';
import { createContext, useContext, useState } from 'react';

// Creazione del contesto globale
const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {

    const urlBase = import.meta.env.VITE_URL_BASE;
    const apiKey = import.meta.env.VITE_CHIAVE_API;
    

    const [query, setQuery] = useState('');

    const [movies, setMovies] =useState([])
    const [tvSeries, setTvSeies] =useState([])

    const isSearching = (e) =>{
        e.preventDefault(); // Evita il refresh della pagina

        //https://api.themoviedb.org/3/search/movie?api_key=e99307154c6dfb0b4750f6603256716d&query=ritorno+al+futuro
        axios.get(`${urlBase}movie?api_key=${apiKey}&language=it&query=${query}`)
            .then(((res) => setMovies(res.data.results)))
            .catch((error) => console.error("Errore nella ricerca:", error));

        //https://api.themoviedb.org/3/search/tv?api_key=e99307154c6dfb0b4750f6603256716d&language=it_IT&query=scrubs
        axios.get(`${urlBase}tv?api_key=${apiKey}&language=it_IT&query=${query}`)
            .then(((res) => setTvSeies(res.data.results)))
            .catch((error) => console.error("Errore nella ricerca:", error));
            console.log(`${urlBase}tv?api_key=${apiKey}&language=it_IT&query=${query}`)
            
    }



    // Valori condivisi nel contesto globale
    const value = {
        setQuery,
        isSearching,
        movies,
        tvSeries
    };

    return (
        <GlobalContext.Provider value={value}>
            {children}
        </GlobalContext.Provider>
    );
};

// Hook personalizzato per accedere al contesto globale in altri componenti
const useGlobalContext = () => useContext(GlobalContext);

// Esportazione del GlobalProvider e del custom hook per l'uso nei componenti
export { GlobalProvider, useGlobalContext };