
import { Link } from "react-router-dom";
import { BookOpen, ChefHat, Home } from "lucide-react";
import { useEffect, useState } from "react";

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? "bg-white/80 backdrop-blur-md shadow-md py-2" : "bg-transparent py-4"
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <ChefHat className="text-[#6E59A5] h-8 w-8" />
            <span className="text-xl font-bold text-[#403E43]">AI Kitchen Magic</span>
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <NavLink to="/" icon={<Home className="w-4 h-4" />}>
              Home
            </NavLink>
            <NavLink to="/recipe-finder" icon={<ChefHat className="w-4 h-4" />}>
              Recipe Finder
            </NavLink>
            <NavLink to="/recipe-library" icon={<BookOpen className="w-4 h-4" />}>
              Recipe Library
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ to, children, icon }: { to: string; children: React.ReactNode; icon: React.ReactNode }) => {
  return (
    <Link 
      to={to} 
      className="flex items-center gap-2 text-[#403E43] hover:text-[#6E59A5] transition-colors relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-[#6E59A5] after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
    >
      {icon}
      <span>{children}</span>
    </Link>
  );
};

export default NavBar;
