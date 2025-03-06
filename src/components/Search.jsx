
import { useGlobalContext } from "../context/GlobalContext"


export default function Search() {

    const { setQuery, handleSearch } = useGlobalContext();



    return (

        <div >
            <form onSubmit={handleSearch} >
                <input
                    type="text"
                    onChange={e => setQuery(e.target.value)}
                    
                    placeholder="Cerca..."
                />
                <button type="submit" >
                    Cerca
                </button>
            </form>
        </div>

    )
};