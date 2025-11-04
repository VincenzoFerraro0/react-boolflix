import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import TvsPage from './Pages/TvsPage';
import MoviesPage from './Pages/MoviesPage';
import AllTrending from './Pages/AllTrending';
import Page404 from './Pages/Page404';
import DefaultLayout from './layout/DefaultLayout';
import { GlobalProvider } from './context/GlobalContext';

function App() {
  return (
    <BrowserRouter>
      <GlobalProvider>
        <Routes>
          <Route Component={DefaultLayout}>
            <Route path="/" Component={HomePage} />
            <Route path="/tv-shows" Component={TvsPage} />
            <Route path="/movies" Component={MoviesPage} />
            <Route path="/new-popular" Component={AllTrending} />
            <Route path="*" Component={Page404} />
          </Route>
        </Routes>
      </GlobalProvider>
    </BrowserRouter>
  );
}

export default App;
