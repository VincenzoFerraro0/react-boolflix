import ReactCountryFlag from "react-country-flag";

export default function Card({ title, origTitle, lang, image }) {
    const urlImg = import.meta.env.VITE_URL_BACKDROP;

    return (
        <div >
            {/* Titolo principale */}
            <h3>{title}</h3>
            
            {/* Titolo originale */}
            <p>{origTitle}</p>
            
            {/* Bandiera della lingua del contenuto */}
            <ReactCountryFlag   countryCode={lang} svg />

            <figure  >
                <img  src={`${urlImg}${image}`} alt={title} />
            </figure>
        </div>
    );
}
