import {useState} from "react";


export default function Header({onHome, onSearch, onFavorites, activeView}){

    const [query, setQuery] = useState("");
    
    function handleSubmit(e){
        e.preventDefault();
        onSearch(query.trim());
    }


    return (
        <header className="site-header">

            <button className="brand" onClick={onHome} aria-label="moviesDB home">
                <span className="brand-mark">M</span>
                <span>
                    movies<span className="accent">DB</span>
                </span>
                </button>

                {/* search form */}
                <form className="search-form" onSubmit={handleSubmit} role="search">
                    <input 
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search movies here..."/>
                    <button type="submit">Search</button>
                </form>


                <nav className="nav-links">
                    <button className={activeView === "home" ? "active" : ""} onClick={onHome}>Discover</button>
                    <button className={activeView === "favorites" ? "active" : ""} onClick={onFavorites}>Favorites</button>
                </nav>
        </header>
    );
}