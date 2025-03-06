import React from "react";
import ReactCountryFlag from "react-country-flag";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons";

export default function Card({ title, origTitle, lang, vote, img }) {
    
    // Converte il codice della lingua in un formato accettato da ReactCountryFlag
    const formattedLang = lang.toUpperCase() === "EN" ? "GB" : lang.toUpperCase() === "JA" ? "JP" : lang.toUpperCase();
    
    // Converte il voto in una valutazione da 1 a 5 stelle
    const starRating = Math.min(Math.ceil(vote / 2), 5);

    const urlImg = import.meta.env.VITE_URL_BACKDROP;
    
    return (
        <div>
            {/* Titolo principale */}
            <h3>{title}</h3>
            
            {/* Titolo originale */}
            <p>{origTitle}</p>
            
            {/* Bandiera della lingua del contenuto */}
            <ReactCountryFlag countryCode={formattedLang} svg />
            
            {/* Rappresentazione del voto con stelle */}
            <div>
                {[...Array(5)].map((_, index) => (
                    <FontAwesomeIcon key={index} icon={index < starRating ? solidStar : regularStar} />
                ))}
            </div>

            <figure>
                <img src={`${urlImg}${img}`} alt={title} />
            </figure>
        </div>
    );
}