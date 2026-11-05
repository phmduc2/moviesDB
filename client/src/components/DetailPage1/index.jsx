import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
 
const baseUrl = import.meta.env.VITE_TMDB_URL;
const apiKey = import.meta.env.VITE_TMDB_KEY;
const imgLink = import.meta.env.VITE_TMDB_IMAGE;
 
export default function DetailPage1() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);
 
  useEffect(() => {
    const getMovie = async () => {
      try {
        const res = await fetch(`${baseUrl}/movie/${id}?api_key=${apiKey}&language=en-US`);
        const data = await res.json();
        setMovie(data);
      } catch (err) {
        console.log("Error", err.message);
      }
    };
    getMovie();
  }, [id]);
 
  if (!movie) return <p className="status-message">Loading movie…</p>;
 
  return (
    <div className="page-content">
      <button className="back-button" onClick={() => navigate(-1)}>← Back to movies</button>
      <div className="detail-hero"
        style={{ backgroundImage: movie.backdrop_path
          ? `linear-gradient(90deg, black, transparent), url(${imgLink.replace("w500", "original")}${movie.backdrop_path})`
          : "none" }}>
        <div className="detail-copy">
          <p className="eyebrow">MOVIE DETAILS</p>
          <h1>{movie.title}</h1>
          <p className="detail-meta">
            {movie.release_date || "Release date unknown"} · ★ {Number(movie.vote_average || 0).toFixed(1)}
            {movie.runtime ? ` · ${movie.runtime} min` : ""}
          </p>
          <p className="overview">{movie.overview || "No overview available."}</p>
          <p className="genre-list">{(movie.genres || []).map((g) => g.name).join(" · ")}</p>
        </div>
      </div>
    </div>
  );
}