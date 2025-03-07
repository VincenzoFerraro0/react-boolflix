
import ReactCountryFlag from "react-country-flag";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons";


export default function Card({ data, type }) {

    const title = type === 'movies' ? data.title : data.name
    const originalTitile = type === 'movies' ? data.original_title : data.original_name
    // Conversione voto in stelle (da 1 a 5)
    const starRating = Math.min(Math.ceil(data.vote_average / 2), 5);


    // Formattazione lingua
    const formattedLang = data.original_language.toUpperCase() === "EN"
        ? "GB"
        : data.original_language.toUpperCase() === "JA"
            ? "JP"
            : data.original_language.toUpperCase();


    return (
        <>
            <li>
                <img src={`https://image.tmdb.org/t/p/w342${data.poster_path}`} alt={title} />
                <div>
                    <h3>{title}</h3>
                    <p>
                        original: {originalTitile}
                    </p>
                    <p>
                        lingua: <ReactCountryFlag countryCode={formattedLang} svg />
                    </p>
                    <div>
                        {[...Array(5)].map((_, index) => (
                            <FontAwesomeIcon key={index} icon={index < starRating ? solidStar : regularStar} />
                        ))}
                    </div>
                </div>
            </li>

        </>
    )
}
