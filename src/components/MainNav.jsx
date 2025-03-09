import { Link, NavLink } from "react-router-dom";
import Search from "./Search";

export default function MainNav() {
    return (
        <nav className="bg-black bg-opacity-90 py-4 px-6 fixed w-full top-0 z-50 shadow-lg">
            <div className="flex items-center justify-between max-w-7xl mx-auto">
                {/* Logo del sito */}
                <Link to="/"  className="text-red-600 text-3xl font-bold">
                    Boolflix
                </Link>

                {/* Links di navigazione - Visibili solo su schermi medi e grandi */}
                <ul className="hidden md:flex space-x-6 text-white text-lg">
                    <li><NavLink to="/" className={({ isActive }) => isActive ? "text-red-600" : "hover:text-gray-400"}>Home</NavLink></li>
                    <li><NavLink to="/tv-shows" className={({ isActive }) => isActive ? "text-red-600" : "hover:text-gray-400"}>TV Shows</NavLink></li>
                    <li><NavLink to="/movies" className={({ isActive }) => isActive ? "text-red-600" : "hover:text-gray-400"}>Movies</NavLink></li>
                    <li><NavLink to="/new-popular" className={({ isActive }) => isActive ? "text-red-600" : "hover:text-gray-400"}>New & Popular</NavLink></li>
                </ul>

                <Search />
            </div>
        </nav>
    );
}
