import PopularList from "../../components/PopularList";
 
export default function PopularPage() {
  return (
    <div className="page-content">
      <section className="page-heading">
        <p className="eyebrow">MOST POPULAR</p>
        <h1>Popular Movies</h1>
      </section>
      <PopularList />
    </div>
  );
}