import axios from 'axios';
import { createContext, useContext, useEffect, useState } from 'react';

// Creazione del contesto globale
const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  const urlBase = import.meta.env.VITE_URL_BASE;
  const apiKey = import.meta.env.VITE_CHIAVE_API;

  // MEMORIZZAZIONE DATI
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [tvs, setTvs] = useState([]);
  const [moviesList, setMoviesList] = useState([]);
  const [tvsList, setTvsList] = useState([]);
  const [allTrending, setAllTrending] = useState([]);
  const [tvsPopulars, setTvsPopulars] = useState([]);
  const [moviesPopulars, setMoviesPopulars] = useState([]);
  const [moviesUpComing, setMoviesUpComing] = useState([]);

  // Funzione di ricerca
  const isSearching = (e) => {
    e.preventDefault();
    axios.get(`${urlBase}movie?api_key=${apiKey}&language=it&query=${query}&include_adult=true`)
      .then((res) => setMovies(res.data.results))
      .catch((error) => console.error("Errore nella ricerca film:", error));

    axios.get(`${urlBase}tv?api_key=${apiKey}&language=it_IT&query=${query}&include_adult=true`)
      .then((res) => setTvs(res.data.results))
      .catch((error) => console.error("Errore nella ricerca serie TV:", error));
  };

  // CHIAMATE API
  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=it`)
      .then((res) => setMoviesList(res.data.results))
      .catch((error) => console.error("Errore nella ricerca film:", error));
  }, []);

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/discover/tv?api_key=${apiKey}&language=it`)
      .then((res) => setTvsList(res.data.results))
      .catch((error) => console.error("Errore nella ricerca serie TV:", error));
  }, []);

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/trending/all/day?language=it&api_key=${apiKey}`)
      .then((res) => setAllTrending(res.data.results))
      .catch((error) => console.error("Errore nella ricerca trending:", error));
  }, []);

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/tv/popular?language=it&api_key=${apiKey}`)
      .then((res) => setTvsPopulars(res.data.results))
      .catch((error) => console.error("Errore nella ricerca serie popolari:", error));
  }, []);

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/popular?language=it&api_key=${apiKey}`)
      .then((res) => setMoviesPopulars(res.data.results))
      .catch((error) => console.error("Errore nella ricerca film popolari:", error));
  }, []);

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/upcoming?language=it&page=1&api_key=${apiKey}`)
      .then((res) => setMoviesUpComing(res.data.results))
      .catch((error) => console.error("Errore nella ricerca film in uscita:", error));
  }, []);

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
    moviesUpComing,
  };

  return (
    <GlobalContext.Provider value={value}>
      {children}
    </GlobalContext.Provider>
  );
};

const useGlobalContext = () => useContext(GlobalContext);

export { GlobalProvider, useGlobalContext };
