import { useState } from "react";
import "./style.css";
 
const baseUrl = import.meta.env.VITE_TMDB_URL;
const apiKey = import.meta.env.VITE_TMDB_KEY;
const imgLink = import.meta.env.VITE_TMDB_IMAGE;
 
export default function SearchForm({ onResults }) {
  const [query, setQuery] = useState("");
 
  async function handleSubmit(event) {
    event.preventDefault();
    const trimmed = query.trim();
    if (!trimmed) return;
    try {
      const res = await fetch(`${baseUrl}/search/movie?api_key=${apiKey}&query=${encodeURIComponent(trimmed)}&language=en-US&page=1`);
      const data = await res.json();
      onResults(data.results || [], trimmed);
    } catch (err) {
      console.log("Error", err.message);
    }
  }
 
  return (
    <form className="search-form" onSubmit={handleSubmit} role="search">
      <input value={query} onChange={(e) => setQuery(e.target.value)}
        placeholder="Search movies..." aria-label="Search movies" />
      <button type="submit">Search</button>
    </form>
  );
}