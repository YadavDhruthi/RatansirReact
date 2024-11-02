function MovieCard({movie}) {
    return (
        <>
            <p>Name: {movie.name}</p>
            <p>Director: {movie.director}</p>
            <p>Year:{movie.year}</p>
        </>
    )
}
export default MovieCard;
