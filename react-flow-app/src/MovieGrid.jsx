import MovieCard from "./MovieCard";

function MovieGrid({movies}) {
    return (
        <>
            <h1>Movie List</h1>
            <>
                {movies.map((movie, index) => (
                    <MovieCard key={index} movie={movie}/>
                ))}
            </>
        </>
    )
}
export default MovieGrid;
