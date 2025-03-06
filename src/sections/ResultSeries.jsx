import Card from "../components/Card";
import { useGlobalContext } from "../context/GlobalContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons";

export default function ResultSeries() {
    const { tvSeries } = useGlobalContext();

    

    return (
        <section>
            <div>
                <h2>Serie TV</h2>
                {tvSeries.length > 0 ? (
                    tvSeries.map((tvShow) => {
                        const { id, name, original_name, original_language, vote_average, backdrop_path } = tvShow;

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
                                    title={name}
                                    origTitle={original_name}
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
                    <p>Nessuna Serie TV trovata</p>
                )}
            </div>
        </section>
    );
}
