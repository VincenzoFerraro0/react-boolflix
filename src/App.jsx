// Importazione delle librerie necessarie per la gestione della navigazione e dei componenti
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// Importazione delle pagine e dei componenti necessari
import HomePage from './Pages/HomePage';
import TvsPage from './Pages/TvsPage';
import MoviesPage from './Pages/MoviesPage'
import AllTrending from './Pages/AllTrending';
import Page404 from './Pages/Page404';


// Importazione del layout di default
import DefaultLayout from './layout/DefaultLayout';
// Importazione del GlobalContext per la gestione dello stato globale
import { GlobalProvider } from "./Context/GlobalContext"



function App() {

  return (
    // Provider globale che avvolge tutta l'applicazione per gestire lo stato globale
    <GlobalProvider>
        {/* Router per gestire la navigazione tra le pagine */}
        <BrowserRouter>
          <Routes>
            {/* Definizione della route principale con layout predefinito */}
            <Route Component={DefaultLayout}>
              {/* Route per la Home Page */}
              <Route path="/" Component={HomePage} />
              <Route path="/tv-shows" Component={TvsPage} />
              <Route path="/movies" Component={MoviesPage} />
              <Route path="/new-popular" Component={AllTrending } />
              <Route path="*" Component={Page404} />
            </Route>
          </Routes>
        </BrowserRouter>
    </GlobalProvider>

  )
}

export default App
