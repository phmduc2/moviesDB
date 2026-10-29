import { getImageUrl } from "../lib/tmdb";

//movie card = poster + title + year + rating
export default function MovieCard({ movie, onOpen }){
    const poster = getImageUrl(movie.poster_path);
    const title = movie.title || movie.name;
    const year = (movie.release_date || "").slice(0,4) || "Year N/A";
    
    return (
        <article className="movie-card">
            {/* poster can be click*/}
            <button className="poster-btn" onClick={() => onOpen(movie.id)}>
                {poster ? (
                    <img src={poster} alt={`${title} poster`}/>
                ) : (
                    <div className="poster-placeholder">No Poster Available</div>
                )}
            </button>


            <div className="movie-card-info">
                <button className="movie-title" onClick={() => onOpen(movie.id)}>
                    {title}
                </button>
                <div className="movie-meta">
                    <span>{year} </span>
                    <span>★ {Number(movie.vote_average).toFixed(1)}</span>
                </div>
            </div>
        </article>

    )
}