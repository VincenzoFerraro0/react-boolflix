export default function Card({ title, origTitle, lang, vote }) {
    return (
        <div >
            {/* Titolo */}
            <h3>{title}</h3>
            {/* Titolo Originale */}
            <p>{origTitle}</p>
            {/* Lingua  */}
            <p>{lang}</p>
            {/* Voto */}
            <p>{vote}</p>
        </div>
    )
};