


export default function CardBackdrop({data}) {

    return (
        <>
        {/* https://image.tmdb.org/t/p/w342/wwemzKWzjKYJFfCeiB57q3r4Bcm.png */}
        <img src={`https://image.tmdb.org/t/p/w300${data.backdrop_path}`} alt={data.title} />
        </>
    )
}
