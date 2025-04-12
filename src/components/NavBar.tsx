
import { useState } from "react";
import { Menu, X } from "lucide-react";

interface NavBarProps {
  activePage: string;
  setActivePage: (page: string) => void;
}

const NavBar = ({ activePage, setActivePage }: NavBarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "search", label: "Search" },
    { id: "database", label: "Car Database" },
    { id: "details", label: "Car Details" },
    { id: "compare", label: "Compare" },
    { id: "about", label: "About" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-blue-600 text-white shadow-md z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <h1 className="text-xl font-bold">CarinfoHub.com</h1>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActivePage(item.id)}
                className={`px-3 py-2 rounded transition-colors ${
                  activePage === item.id
                    ? "bg-white text-blue-600 font-medium"
                    : "text-white hover:bg-blue-500"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md hover:bg-blue-500 focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-blue-600 pb-4 px-4">
          <div className="flex flex-col space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActivePage(item.id);
                  setIsMenuOpen(false);
                }}
                className={`px-3 py-2 rounded transition-colors ${
                  activePage === item.id
                    ? "bg-white text-blue-600 font-medium"
                    : "text-white hover:bg-blue-500"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
