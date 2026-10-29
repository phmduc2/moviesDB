import MovieCard from "./MovieCard";

//show movie cards in a grid
export default function MovieGrid({ movies, onOpen, favorites , onToggleFavorite }){
    if (!movies.length){
        return <p className="empty">No movies found</p>
    }

    return (
        <div className ="movie-grid">
            {movies.map((movie) => (
                <MovieCard key={movie.id} movie={movie} onOpen={onOpen} 
                isFavorite={favorites.some((item) => item.id === movie.id)} onToggleFavorite={onToggleFavorite} />
            ))}
        </div>
    )
}