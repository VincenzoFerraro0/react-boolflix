import { useGlobalContext } from "../Context/GlobalContext"

export default function Search() {
    const { setQuery, isSearching } = useGlobalContext();

    return (
        <div className="relative">
            <form onSubmit={isSearching} className="flex items-center bg-gray-900 rounded-md overflow-hidden">
                <input
                    type="text"
                    onChange={e => setQuery(e.target.value)}
                    placeholder="Cerca..."
                    className="bg-transparent text-white px-4 py-2 focus:outline-none w-64"
                />
                <button type="submit" className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white">
                    Cerca
                </button>
            </form>
        </div>
    );
}