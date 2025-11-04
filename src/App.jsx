import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import TvsPage from './pages/TvsPage';
import MoviesPage from './pages/MoviesPage';
import AllTrending from './pages/AllTrending';
import Page404 from './pages/Page404';
import DefaultLayout from './layout/DefaultLayout';


function App() {
  return (
        <Routes>
          <Route Component={DefaultLayout}>
            <Route path="/" Component={HomePage} />
            <Route path="/tv-shows" Component={TvsPage} />
            <Route path="/movies" Component={MoviesPage} />
            <Route path="/new-popular" Component={AllTrending} />
            <Route path="*" Component={Page404} />
          </Route>
        </Routes>
  );
}

export default App;
