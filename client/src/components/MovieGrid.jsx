import MovieCard from "./MovieCard";

//show movie cards in a grid
export default function MovieGrid({ movies, onOpen }){
    if (!movies.length){
        return <p className="empty">No movies found</p>
    }

    return (
        <div className ="movie-grid">
            {movies.map((movie) => (
                <MovieCard key={movie.id} movie={movie} onOpen={onOpen} />
            ))}
        </div>
    )
}