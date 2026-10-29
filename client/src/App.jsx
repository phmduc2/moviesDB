import Header from "./components/Header";
import MovieGrid from "./components/MovieGrid";
import {useEffect, useState} from "react";
import {getPopularMovies} from "./lib/tmdb";
import {getMovieDetails, getImageUrl, searchMovies} from "./lib/tmdb";

export default function App() {
  //state for movies, loading, error, selected movie
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [title, setTitle] = useState("Poplar Movies");

  //get popular movies
  useEffect(() => {
    loadPopular();
  }, []);

  //load popular movies
  async function loadPopular() {
    setLoading(true);
    setError("");
    setSelectedMovie(null);
    //setSelectedMovie();
    setTitle("Popular Movies")
    
    try{
    const data = await getPopularMovies();
    setMovies(data.results || []);
    } catch (err){
      setError(err.message || "Could not load.");
    } finally {
      setLoading(false);
    }
  }
//search movie
  async function handleSearch(query){
    //if nothing in query load popular
    if (!query){
      loadPopular();
      return;
    }
    //start loading state
    setLoading(true);
    //clear previous error
    setError("");
    setSelectedMovie(null);
    //update heading
    setTitle(`Search result for "${query}"`);
    try{
      const data = await searchMovies(query);
      setMovies(data.results || [])

    }catch(err){
      setError(err.message || "Search failed!")
    } finally{
      setLoading(false);
    }
  }

//open movie details
  async function openMovie(movieID){
    setLoading(true);
    setError("");
    try{
      const details = await getMovieDetails(movieID);
      setSelectedMovie(details);
      
    }catch (err){
      setError(err.message || "Could not load movie details.");
    } finally {
      setLoading(false);
    }
  }

  function backToList(){
    setSelectedMovie(null);
  }

  return (
    <div className="app-shell">
      <Header onSearch={handleSearch}  onHome={loadPopular} />

      <main className="page-content">
        {/* if selectedMovie is not null, show movie details */}
        {selectedMovie ?(
          <section>
            <button className="back-btn" onClick={backToList}>Back to list</button>
            <div className="movie-details" style={{backgroundImage: selectedMovie.backdrop_path ? `linear-gradient(90deg, black, transparent), url(${getImageUrl(selectedMovie.backdrop_path, "original")})` : "none"}}>
              <div className="detail-copy">
                <p className="next">Movie Details</p>
                <h1>{selectedMovie.title}</h1>
                <p className="detail-meta">
                  {selectedMovie.release_date || "Unknown"} {". "}★{Number(selectedMovie.vote_average).toFixed(1)}
                  
                </p>
                <p className="detail-overview">{selectedMovie.overview || "No overview available."}</p>
                <p className="detail-genres">
                  {(selectedMovie.genres || []).map((genre) => genre.name).join(", ")}
                </p>
              </div>
            </div>
          </section>
        ):(
         <> 
          
        <section className="page-heading">
          <p className="next">FIND YOUR NEXT FAVORITE</p>
          <h1>{title}</h1>
          <p>Discover movies, explore details, save a watchlist</p>          
        </section>
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {!loading && !error && <MovieGrid movies={movies} onOpen={openMovie} />}
        </>
        )}
      </main>
       

        <footer className="site-footer">
          <p>moviesDB - Movie data provided by TMDb.</p>
        </footer>
      </div>
    );
}