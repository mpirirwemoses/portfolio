import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="bg-gradient-to-r sticky top-0 from-purple-900 z-10 via-blue-500 to-purple text-white py-6">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex gap-4 items-center">
          <img className="rounded-full ml-2 h-[45px] w-[45px] object-cover" src='' alt="logo" />
          <h1 className="text-2xl font-bold">Moses M</h1>
        </div>
        {/* Hamburger for mobile */}
        <button
          className="md:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-white"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>
        {/* Nav links */}
        <nav>
          <ul className="hidden md:flex space-x-8 items-center">
            <li><Link to="/#about" className="hover:underline px-3 hover:bg-blue-500 py-2 italic rounded text-lg">About</Link></li>
            <li><Link to="/#projects" className="hover:underline hover:bg-blue-500 px-3 py-2 italic rounded text-lg">Projects</Link></li>
            <li><Link to="/#contact" className="hover:underline hover:bg-blue-500 px-3 py-2 italic rounded text-lg">Contact</Link></li>
            <li><Link to="/#experience" className="hover:underline hover:bg-blue-500 px-3 py-2 italic rounded text-lg">Experience</Link></li>
            <li><Link to="/contact"><button className="px-4 py-2 border border-transparent hover:bg-purple-400 hover:text-black hover:border-blue-500 rounded-full bg-purple-700 text-white text-lg">Hire Me</button></Link></li>
          </ul>
          {/* Mobile menu dropdown */}
          {menuOpen && (
            <ul className="absolute top-[72px] left-0 w-full bg-gradient-to-b from-purple-900 via-blue-700 to-purple-700 text-white flex flex-col items-center space-y-4 py-6 shadow-lg md:hidden z-50 animate-fade-in">
              <li><Link to="/#about" className="hover:underline px-3 hover:bg-blue-500 py-2 italic rounded text-lg block w-full text-center" onClick={() => setMenuOpen(false)}>About</Link></li>
              <li><Link to="/#projects" className="hover:underline hover:bg-blue-500 px-3 py-2 italic rounded text-lg block w-full text-center" onClick={() => setMenuOpen(false)}>Projects</Link></li>
              <li><Link to="/#contact" className="hover:underline hover:bg-blue-500 px-3 py-2 italic rounded text-lg block w-full text-center" onClick={() => setMenuOpen(false)}>Contact</Link></li>
              <li><Link to="/#experience" className="hover:underline hover:bg-blue-500 px-3 py-2 italic rounded text-lg block w-full text-center" onClick={() => setMenuOpen(false)}>Experience</Link></li>
              <li><Link to="/contact"><button className="px-4 py-2 border border-transparent hover:bg-purple-400 hover:text-black hover:border-blue-500 rounded-full bg-purple-700 text-white text-lg w-full" onClick={() => setMenuOpen(false)}>Hire Me</button></Link></li>
            </ul>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;