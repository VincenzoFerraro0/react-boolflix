import { useGlobalContext } from "../context/GlobalContext"
import ResultList from "../Sections/ResultList";

export default function AllTrending() {
    const { allTrending } = useGlobalContext();

    return (
        <main  className="min-h-screen bg-gray-900 text-white pt-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <section className="mb-12" >
                    <h2 className="text-2xl font-bold mb-4">nuovi e popolari</h2>
                    <ResultList type='movies' items={allTrending} />
                </section>

            </div>
        </main>
    )
};