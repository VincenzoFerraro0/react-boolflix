import { useGlobalContext } from "../Context/GlobalContext";

import ResultSearch from "../Sections/ResultSearch";
import ResultList from "../Sections/ResultList"


export default function HomePage() {

    const { movies, tvs, tvsPopulars, moviesPopulars, moviesUpComing } = useGlobalContext();
    return (
        <>
            <section>
                <h2>film trovati</h2>
                <ResultSearch type="movies" items={movies} />
            </section>

            <section>
                <h2>serie tv trovate</h2>
                <ResultSearch type="tvSeries" items={tvs} />
            </section>

            <section>
                <h2>serie tv popolari</h2>
                <ResultList type="tvSeries" items={tvsPopulars} />
            </section>

            <section>
                <h2>film popolari</h2>
                <ResultList type="movies" items={moviesPopulars} />
            </section>

            <section>
                <h2>film in uscita</h2>
                <ResultList type="movies" items={moviesUpComing}   />
            </section>
        </>
    )
};