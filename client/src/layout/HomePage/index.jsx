import NowPlaying from "../../components/NowPlaying";
import Trending from "../../components/Trending";
import PopularList from "../../components/PopularList";


export default function HomePage() {
  return (
    <div className="page-content">
      <section className="page-heading">
        <p className="eyebrow">FIND YOUR NEXT FAVORITE</p>
        <h1>Popular Movies</h1>
        <p>Discover movies, explore details, and save a watchlist.</p>
      </section>
      <NowPlaying />
      <br />
      <Trending />
      <br />
      <PopularList />
    </div>
  );
}
