import { useGlobalContext } from "../Context/GlobalContext";
import ResultList from "../Sections/ResultList";


export default function MoviesPage() {

    const { moviesList } = useGlobalContext();
    return (
        <section>
            <div>
                <h3>Pagina dei filM</h3>
                <ResultList type='movies' items={moviesList} />
            </div>
        </section>
    )
};