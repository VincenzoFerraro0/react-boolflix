
import Card from "../components/Card";
import { useGlobalContext } from "../context/GlobalContext"


export default function Main() {

    const { movies, tvSeries } = useGlobalContext();

    return (
        <main>
            <div>
                <h2>Film</h2>
                {movies.length > 0 ? (
                    movies.map((movie) => {
                        const { id, title, original_title, original_language, vote_average } = movie
                        return (
                            <Card
                                key={id}
                                title={title}
                                origTitle={original_title}
                                lang={original_language.toUpperCase()} // Converti in maiuscolo
                                vote={vote_average}
                            />
                            
                        )
                    })

                ) : (
                    <p>Nessun film trovato</p>
                )
                }
            </div>
            <div>
                <h2>Serie tv</h2>
                {tvSeries.length > 0 ? (
                    tvSeries.map((tvShow) => {
                        const { id, name, original_name, original_language, vote_average } = tvShow
                        return (
                            <Card
                                key={id}
                                title={name}
                                origTitle={original_name}
                                lang={original_language.toUpperCase()} // Converti in maiuscolo
                                vote={vote_average}
                            />
                        )
                    })

                ) : (
                    <p>Nessuna Serie tv trovata</p>
                )
                }
            </div>
        </main>
    )
};