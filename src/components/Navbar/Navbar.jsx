import { Link, NavLink } from "react-router-dom";
import './Navbar.css'
import SmallButton from "../Buttons/SmallButton";

const Navbar = () => {
    const navLink = <>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/add-products">Add Products</NavLink>
    </>
    return (
        <nav className="navbar bg-base-100 font-bold shadow-lg px-2 fixed max-w-screen-2xl">
            <div className="navbar-start">
                {/* small screen */}
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow flex gap-2">
                        {navLink}
                    </ul>
                </div>
                <Link to="/" className="text-2xl">Fabrico</Link>
            </div>

            {/* large screen */}
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 flex gap-3">
                    {navLink}
                </ul>
            </div>
            <div className="navbar-end">
                <Link to="/login"><SmallButton name="Login"></SmallButton></Link>
            </div>
        </nav>
    );
};

export default Navbar;