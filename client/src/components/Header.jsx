import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gray-900 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-xl font-bold tracking-wide">
          Vote<span className="text-indigo-500">App</span>
        </h1>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-8 text-sm font-medium">
          <Link to="/" className="hover:text-indigo-400">
            Home
          </Link>
          <Link to="/vote" className="hover:text-indigo-400">
            Vote
          </Link>
          <Link to="/results" className="hover:text-indigo-400">
            Results
          </Link>
          <Link to="/login" className="hover:text-indigo-400">
            Login
          </Link>
          <Link to="/signup" className="hover:text-indigo-400">
            Register
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-800 px-4 pb-4 space-y-3 text-sm">
          <Link to="/" className="block hover:text-indigo-400">
            Home
          </Link>
          <Link to="/vote" className="block hover:text-indigo-400">
            Vote
          </Link>
          <Link to="/results" className="block hover:text-indigo-400">
            Results
          </Link>
          <Link to="/login" className="block hover:text-indigo-400">
            Login
          </Link>
          <Link to="/signup" className="block hover:text-indigo-400">
            Register
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
