import { useGlobalContext } from "../Context/GlobalContext";
import ResultSearch from "../Sections/ResultSearch";
import ResultList from "../Sections/ResultList";

export default function HomePage() {
    const { movies, tvs, tvsPopulars, moviesPopulars, moviesUpComing } = useGlobalContext();

    // Controllo se è stata effettuata una ricerca
    const isSearchActive = movies.length > 0 || tvs.length > 0;

    return (
        <main className="min-h-screen bg-gray-900 text-white pt-12 px-4">
            <div className="max-w-7xl mx-auto lg:px-8 py-12">
                {isSearchActive ? (
                    <>
                        <section className="mb-12">
                            <h2 className="text-2xl font-bold mb-4">film trovati</h2>
                            <ResultSearch type="movies" items={movies} />
                        </section>

                        <section  className="mb-12">
                            <h2 className="text-2xl font-bold mb-4">serie tv trovate</h2>
                            <ResultSearch type="tvSeries" items={tvs} />
                        </section>
                    </>
                ) : (
                    <>
                        <section  className="mb-12 ">
                            <h2 className="text-2xl font-bold mb-4">serie tv popolari</h2>
                            <ResultList type="tvSeries" items={tvsPopulars} />
                        </section>

                        <section  className="mb-12">
                            <h2 className="text-2xl font-bold mb-4">film popolari</h2>
                            <ResultList type="movies" items={moviesPopulars} />
                        </section>

                        <section  className="mb-12">
                            <h2 className="text-2xl font-bold mb-4">prossimamente</h2>
                            <ResultList type="movies" items={moviesUpComing} />
                        </section>
                    </>
                )}
            </div>

        </main>
    );
}
