export default function Header({onHome}){
    return (
        <header className="site-header">
            <button className="brand" onClick={onHome} aria-label="moviesDB home">
                <span className="brand-mark">M</span>
                <span>
                    movies<span className="accent">DB</span>
                </span>
                </button>
                <nav className="nav-links">
                    <button onClick={onHome}>Discover</button>
                </nav>
        </header>
    );
}