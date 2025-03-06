import { Link, NavLink } from "react-router-dom";

export default function MainNav() {

    const urlBase = import.meta.env.VITE_URL_BASE;
    const apiKey = import.meta.env.VITE_CHIAVE_API;

    return (
        <nav>
            <div >
                {/* Logo del sito */}
                <Link to="/" className="text-2xl font-bold text-blue-600">Boolflix</Link>


                {/* Links di navigazione - Visibili solo su schermi medi e grandi */}
                <ul>
                    <li><NavLink to="/" >Home</NavLink></li>
                    <li><NavLink to="/tv-shows" >TV Shows</NavLink></li>
                    <li><NavLink to="/movies" >Movies</NavLink></li>
                    <li><NavLink to="/new-popular" >New & Popular</NavLink></li>
                </ul>

                <form>
                    <input
                        type="text" 
                    />
                    <button></button>
                </form>
            </div>
        </nav>
    )
};