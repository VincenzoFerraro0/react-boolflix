import { useGlobalContext } from "../Context/GlobalContext";
import ResultSearch from "../Sections/ResultSearch";
import ResultList from "../Sections/ResultList";

export default function HomePage() {
    const { movies, tvs, tvsPopulars, moviesPopulars, moviesUpComing } = useGlobalContext();

    // Controllo se è stata effettuata una ricerca
    const isSearchActive = movies.length > 0 || tvs.length > 0;

    return (
        <main className="min-h-screen bg-gray-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {isSearchActive ? (
                    <>
                        <section className="mb-12">
                            <h2 className="text-2xl font-bold mb-4">Film trovati</h2>
                            <ResultSearch type="movies" items={movies} />
                        </section>

                        <section  className="mb-12">
                            <h2 className="text-2xl font-bold mb-4">Serie TV trovate</h2>
                            <ResultSearch type="tvSeries" items={tvs} />
                        </section>
                    </>
                ) : (
                    <>
                        <section  className="mb-12">
                            <h2 className="text-2xl font-bold mb-4">Serie TV popolari</h2>
                            <ResultList type="tvSeries" items={tvsPopulars} />
                        </section>

                        <section  className="mb-12">
                            <h2 className="text-2xl font-bold mb-4">Film popolari</h2>
                            <ResultList type="movies" items={moviesPopulars} />
                        </section>

                        <section  className="mb-12">
                            <h2 className="text-2xl font-bold mb-4">Film in uscita</h2>
                            <ResultList type="movies" items={moviesUpComing} />
                        </section>
                    </>
                )}
            </div>

        </main>
    );
}
