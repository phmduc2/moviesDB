import { getImageUrl } from "../lib/tmdb";

//movie card = poster + title + year + rating
export default function MovieCard({ movie }){
    const poster = getImageUrl(movie.poster_path);
    const title = movie.title || movie.name;
    const year = (movie.release_date || "").slice(0,4) || "Year N/A";
    
    return (
        <article className="movie-card">
            <div className="poster-btn">
                {poster ? (
                    <img src={poster} alt={`${title} poster`} loading="lazy"/>
                ) : (
                    <div className="poster-placeholder">No Poster Available</div>
                )}
            </div>


            <div className="movie-card-info">
                <span className="movie-title">{title}</span>
                <div className="movie-meta">
                    <span>{year}</span>
                    <span>★ {Number(movie.vote_average).toFixed(1)}</span>
                </div>
            </div>
        </article>

    )
}