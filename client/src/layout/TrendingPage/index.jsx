import Trending from "../../components/Trending";
 
export default function TrendingPage() {
  return (
    <div className="page-content">
      <section className="page-heading">
        <p className="eyebrow">TRENDING NOW</p>
        <h1>Trending Movies</h1>
      </section>
      <Trending />
    </div>
  );
}