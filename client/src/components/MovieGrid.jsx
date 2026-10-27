import MoviesCard from "./MoviesCard";

//show movie cards in a grid
export default function MovieGrid({ movies }){
    if (!movies.length){
        return <p className="empty">No movies found</p>
    }

    return (
        <div className ="movie-grid">
            {movies.map((movie) => (
                <MoviesCard key={movie.id} movie={movie} />
            ))}
        </div>
    )
}