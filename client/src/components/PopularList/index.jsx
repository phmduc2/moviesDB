import { useEffect, useState } from "react";
import "./style.css";
 
const baseUrl = import.meta.env.VITE_TMDB_URL;
const apiKey = import.meta.env.VITE_TMDB_KEY;
const imgLink = import.meta.env.VITE_TMDB_IMAGE;
 
export default function PopularList() {
  const [movies, setMovies] = useState([]);
 
  useEffect(() => {
    const getMovies = async () => {
      try {
        const res = await fetch(`${baseUrl}/movie/popular?api_key=${apiKey}&language=en-US&page=1`);
        const data = await res.json();
        setMovies(data.results || []);
      } catch (err) {
        console.log("Error", err.message);
      }
    };
    getMovies();
  }, []);
 
  return (
    <div className="popular-list">
      <h2>Popular Movies</h2>
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