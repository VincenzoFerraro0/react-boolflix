import axios from 'axios';
import { createContext, useContext, useEffect, useState } from 'react';

// Creazione del contesto globale
const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {

    const urlBase = import.meta.env.VITE_URL_BASE;
    const apiKey = import.meta.env.VITE_CHIAVE_API;
    
    // MEMORIZZAZIONE DATI
    const [query, setQuery] = useState('');
    const [movies, setMovies] =useState([]);
    const [tvs, setTvs] =useState([]);
    const [moviesList, setMoviesList] = useState([]);
    const [tvsList, setTvsList] = useState([]);
    const [allTrending, setAllTrending] = useState([]);
    const [tvsPopulars, setTvsPopulars] = useState([]);
    const [moviesPopulars, setMoviesPopulars] = useState([]);
    const [moviesUpComing, setMoviesUpComing] = useState([]);


    //Chiamate api per ricerca 
    const isSearching = (e) =>{
        e.preventDefault(); // Evita il refresh della pagina

        //https://api.themoviedb.org/3/search/movie?api_key=e99307154c6dfb0b4750f6603256716d&query=ritorno+al+futuro
        axios.get(`${urlBase}movie?api_key=${apiKey}&language=it&query=${query}&language=it&include_adult=true`)
            .then(((res) => setMovies(res.data.results)))
            .catch((error) => console.error("Errore nella ricerca:", error));

        //https://api.themoviedb.org/3/search/tv?api_key=e99307154c6dfb0b4750f6603256716d&language=it_IT&query=scrubs
        axios.get(`${urlBase}tv?api_key=${apiKey}&language=it_IT&query=${query}&language=it&include_adult=true`)
            .then(((res) => setTvs(res.data.results)))
            .catch((error) => console.error("Errore nella ricerca:", error));
           // console.log(`${urlBase}tv?api_key=${apiKey}&language=it_IT&query=${query}`)
            
    }

    // CHIAMATA API PER LA PAGINA MOVIES
    useEffect(()=>{
        axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=it&include_adult=true`)
            .then((res)=> setMoviesList(res.data.results))
            .catch((error) => console.error("Errore nella ricerca:", error))
            //console.log(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}`)
    },[])

    // CHIAMATA API PER LA PAGINA TV-SHOWS
    useEffect(()=>{
        axios.get(`https://api.themoviedb.org/3/discover/tv?api_key=${apiKey}&language=it&include_adult=true`)
            .then((res)=> setTvsList(res.data.results))
            .catch((error) => console.error("Errore nella ricerca:", error))
            //console.log(`https://api.themoviedb.org/3/discover/tv?api_key=${apiKey}`)
    },[])


    // CHIAMATA API PER LA PAGINA TV-SHOWS
    useEffect(()=>{
        axios.get(`https://api.themoviedb.org/3/discover/tv?api_key=${apiKey}&language=it&include_adult=true`)
            .then((res)=> setTvsList(res.data.results))
            .catch((error) => console.error("Errore nella ricerca:", error))
            //console.log(`https://api.themoviedb.org/3/discover/tv?api_key=${apiKey}`)
    },[])

    // CHIAMATA API ALL TRENDING
    useEffect(()=>{
        axios.get(`https://api.themoviedb.org/3/trending/all/day?language=it&api_key=${apiKey}`)
            .then((res) => setAllTrending(res.data.results))
            .catch((error) => console.error("Errore nella ricerca:", error))
            //console.log(`https://api.themoviedb.org/3/trending/all/day?language=it&api_key=${apiKey}`)
           
    },[])
    // CHIAMATA API SERIE POPOLARI
    useEffect(()=>{
        axios.get(`https://api.themoviedb.org/3/tv/popular?language=it&api_key=${apiKey}`)
            .then((res) => setTvsPopulars(res.data.results))
            .catch((error) => console.error("Errore nella ricerca:", error))
            //console.log(`https://api.themoviedb.org/3/tv/popular?language=it&api_key=${apiKey}`)
    },[])

    // CHIAMATA API FILM POPOLARI
    useEffect(()=>{
        axios.get(`https://api.themoviedb.org/3/movie/popular?language=IT&api_key=${apiKey}`)
            .then((res) => setMoviesPopulars(res.data.results))
            .catch((error) => console.error("Errore nella ricerca:", error))
           //console.log(`https://api.themoviedb.org/3/movie/popular?language=IT&api_key=${apiKey}`)
    },[])

    // CHIAMATA API PER I FILM IN USCITA
    useEffect(()=> {
        axios.get(` https://api.themoviedb.org/3/movie/upcoming?language=it&page=1&api_key=${apiKey}`)
            .then((res) => setMoviesUpComing(res.data.results))
            .catch((error) => console.error("Errore nella ricerca:", error))
            console.log(` https://api.themoviedb.org/3/movie/upcoming?language=it&page=1&api_key=${apiKey}`)
    },[])




    // Valori condivisi nel contesto globale
    const value = {
        setQuery,
        isSearching,
        movies,
        tvs,
        moviesList,
        tvsList,
        allTrending,
        tvsPopulars,
        moviesPopulars,
        moviesUpComing
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