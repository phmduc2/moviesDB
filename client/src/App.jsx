import Header from "./components/Header";
import MovieGrid from "./components/MovieGrid";
import {useEffect, useState} from "react";
import {getPopularMovies} from "./lib/tmdb";


export default function App() {
  const [movies, setMovies] = useState([]);

  //get popular movies
  useEffect(() => {
    loadPopular();
  }, []);

  async function loadPopular() {
    const data = await getPopularMovies();
    setMovies(data.results || []);
  }


  return (
    <div className="app-shell">
      <Header onHome={loadPopular} />

      <main className="page-content">
        <section className="page-heading">
          <p className="next">FIND YOUR NEXT FAVORITE</p>
          <h1>Popular Movies</h1>
          <p>Discover movies, explore details, save a watchlist</p>          
        </section>

        <MovieGrid movies={movies} />
        </main>

        <footer className="site-footer">
          <p>moviesDB - Movie data provided by TMDb.</p>
        </footer>
      </div>
    );
}