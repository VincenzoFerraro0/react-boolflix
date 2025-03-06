import ReactCountryFlag from "react-country-flag";

export default function Card({ title, origTitle, lang, vote }) {

    const formattedLang = lang.toUpperCase() === "EN" ? "GB" : lang.toUpperCase() === "JA" ? "JP" : lang.toUpperCase();
    return (
        <div >
            {/* Titolo */}
            <h3>{title}</h3>
            {/* Titolo Originale */}
            <p>{origTitle}</p>
            {/* Lingua  */}
            <ReactCountryFlag countryCode={formattedLang} svg />
            {/* Voto */}
            <p>{vote}</p>
            
        </div>

       
    )
};