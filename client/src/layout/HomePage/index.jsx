import NowPlaying from "../../components/NowPlaying";
import Trending from "../../components/Trending";
import PopularList from "../../components/PopularList";
import { useState } from "react";
import SearchForm from "../../components/SearchForm";



export default function HomePage() {
  const [results, setResults] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
 
  function handleResults(movies, term) {
    setResults(movies);
    setSearchTerm(term);
  }

  return (
    <div className="page-content">
      <section className="page-heading">
        <p className="eyebrow">FIND YOUR NEXT FAVORITE</p>
        <h1>{results ? `Search results for "${searchTerm}"` : "Popular Movies"}</h1>
        <p>Discover movies, explore details, and save a watchlist.</p>
      </section>
      <SearchForm onResults={handleResults} />
      {results ? (
        <div className="movie-row">
          {results.map((m) => (
            <div key={m.id} className="movie-card">
              <img src={`${import.meta.env.VITE_TMDB_IMAGE}${m.poster_path}`} alt={m.title} />
              <p>{m.title}</p>
            </div>
          ))}
        </div>
      ) : (
        <>
          <NowPlaying />
          <br />
          <Trending />
          <br />
          <PopularList />
        </>
      )}
    </div>
  );
}
