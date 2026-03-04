import { useState } from "react";
import { motion } from "framer-motion";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-linear-to-b from-purple-50 to-white">
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md border-b border-purple-200/30 shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <div className="text-3xl font-bold bg-linear-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
            Interncred
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-10">
            <a
              href="#features"
              className="text-gray-800 hover:text-purple-700 font-medium transition"
            >
              Features
            </a>
            <a
              href="#testimonials"
              className="text-gray-800 hover:text-purple-700 font-medium transition"
            >
              Testimonials
            </a>
            <a
              href="#contact"
              className="text-gray-800 hover:text-purple-700 font-medium transition"
            >
              Join
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-3xl text-purple-700 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="md:hidden bg-white/95 backdrop-blur-md border-t border-purple-200/30 shadow-lg"
          >
            <div className="flex flex-col items-center py-6 space-y-6">
              <a
                href="#features"
                className="text-xl text-gray-800 hover:text-purple-700"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </a>
              <a
                href="#testimonials"
                className="text-xl text-gray-800 hover:text-purple-700"
                onClick={() => setIsMenuOpen(false)}
              >
                Testimonials
              </a>
              <a
                href="#contact"
                className="text-xl text-gray-800 hover:text-purple-700"
                onClick={() => setIsMenuOpen(false)}
              >
                Join
              </a>
            </div>
          </motion.div>
        )}
      </nav>

      {/* Placeholder for hero – we'll add next */}
      <div className="h-screen flex items-center justify-center">
        <h1 className="text-6xl font-bold text-purple-800">
          Landing Page Coming Soon...
        </h1>
      </div>
    </div>
  );
}

export default App;
