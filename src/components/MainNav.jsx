import { Link, NavLink } from "react-router-dom";
import Search from "./Search";

export default function MainNav() {



    return (
        <nav >
            <div >
                {/* Logo del sito */}
                <Link to="/" >Boolflix</Link>


                {/* Links di navigazione - Visibili solo su schermi medi e grandi */}
                <ul  >
                    <li><NavLink to="/" >Home</NavLink></li>
                    <li><NavLink to="/tv-shows" >TV Shows</NavLink></li>
                    <li><NavLink to="/movies" >Movies</NavLink></li>
                    <li><NavLink to="/new-popular" >New & Popular</NavLink></li>
                </ul>

                <Search />
            </div>
        </nav>
    )
};