import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">

        
        <Link to="/" className="flex items-center gap-2">
          <div className="bg-blue-600 text-white w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm">
            IH
          </div>
          <span className="text-xl font-bold text-gray-900">
            Interview<span className="text-blue-600">Hub</span>
          </span>
        </Link>

        
        <div className="flex items-center gap-6">
          <Link
            to="/"
            className="text-gray-600 hover:text-blue-600 font-medium text-sm transition-colors duration-200"
          >
            Home
          </Link>
          <Link
            to="/login"
            className="text-gray-600 hover:text-blue-600 font-medium text-sm transition-colors duration-200"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="text-gray-600 hover:text-blue-600 font-medium text-sm transition-colors duration-200"
          >
            Register
          </Link>
        </div>

        
        <Link
          to="/create-experience"
          className="bg-blue-600 text-white px-5 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 active:scale-95 transition-all duration-200 shadow-sm"
        >
          Share Experience
        </Link>

      </div>
    </nav>
  );
}

export default Navbar;
