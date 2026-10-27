import Header from "./components/Header";

export default function App() {
  return (
    <div className="app-shell">
      <Header />

      <main className="page-content">
        <section className="page-heading">
          <p className="next">FIND YOUR NEXT FAVORITE</p>
          <h1>Popular Movies</h1>
          <p>Discover movies, explore details, save a watchlist</p>          
        </section>
        </main>

        <footer className="site-footer">
          <p>moviesDB - Movie data provided by TMDb.</p>
        </footer>
      </div>
    );
}