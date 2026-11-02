import { useEffect, useState } from "react";
import "./style.css";
 
const baseUrl = import.meta.env.VITE_TMDB_URL;
const apiKey = import.meta.env.VITE_TMDB_KEY;
const imgLink = import.meta.env.VITE_TMDB_IMAGE;
 
export default function NowPlaying() {
  const [movies, setMovies] = useState([]);
 
  useEffect(() => {
    const getMovies = async () => {
      try {
        const res = await fetch(`${baseUrl}/movie/now_playing?api_key=${apiKey}&language=en-US`);
        const data = await res.json();
        setMovies(data.results || []);
      } catch (err) {
        console.log("Error", err.message);
      }
    };
    getMovies();
  }, []);
 
  return (
    <div className="now-playing">
      <h2>Now Playing</h2>
      <div className="movie-row">
        {movies.map((m) => (
          <div key={m.id} className="movie-card">
            <img src={`${imgLink}${m.poster_path}`} alt={m.title} />
            <p>{m.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}