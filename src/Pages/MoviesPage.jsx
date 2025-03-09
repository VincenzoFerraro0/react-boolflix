import { useGlobalContext } from "../Context/GlobalContext";
import ResultList from "../Sections/ResultList";


export default function MoviesPage() {

    const { moviesList } = useGlobalContext();
    return (
        <main  className="min-h-screen bg-gray-900 text-white pt-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <section className="mb-12">
                    <h2  className="text-2xl font-bold mb-4">film</h2>
                    <ResultList type='movies' items={moviesList} />
                </section>

            </div>
        </main>
    )
};