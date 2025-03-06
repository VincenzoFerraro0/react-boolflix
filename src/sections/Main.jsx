
import Card from "../components/Card";
import { useGlobalContext } from "../context/GlobalContext"

export default function Main() {

    const { movies } = useGlobalContext();
    return (
        <main>
            <div>
                {movies.length > 0 ? (
                    movies.map((movie) => {
                        const { id,  title, original_title, original_language, vote_average } = movie
                        return (
                            <Card
                                key={id}
                                title={title}
                                origTitle={original_title }
                                lang={original_language}
                                vote={vote_average }
                            />
                        )
                    })

                ) : (
                    <p>Nessun film trovato</p>
                )
                }
            </div>
        </main>
    )
};