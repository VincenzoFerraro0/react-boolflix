import Card from "../components/Card";
import { useGlobalContext } from "../context/GlobalContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons";

export default function ResultMovies() {
    const { movies } = useGlobalContext();


    return (
        <section>
            <div>
                <h2>Film</h2>
                {movies.length > 0 ? (
                    movies.map((movie) => {
                        const { id, title, original_title, original_language, vote_average, backdrop_path } = movie;

                        // Formattazione lingua
                        const formattedLang = original_language.toUpperCase() === "EN" 
                            ? "GB" 
                            : original_language.toUpperCase() === "JA" 
                            ? "JP" 
                            : original_language.toUpperCase();

                        // Conversione voto in stelle (da 1 a 5)
                        const starRating = Math.min(Math.ceil(vote_average / 2), 5);

                        return (
                            <div key={id}>
                                <Card
                                    title={title}
                                    origTitle={original_title}
                                    lang={formattedLang}
                                    image={backdrop_path}
                                />
                                {/* Stelle */}
                                <div>
                                    {[...Array(5)].map((_, index) => (
                                        <FontAwesomeIcon key={index} icon={index < starRating ? solidStar : regularStar} />
                                    ))}
                                </div>
                            </div>
                        );
                    })
                ) : (
                    <p>Nessun film trovato</p>
                )}
            </div>
        </section>
    );
}
