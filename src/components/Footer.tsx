
import { Link } from "react-router-dom";
import { ChefHat, BookOpen, Home, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#403E43] text-white py-12 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <ChefHat className="text-[#E5DEFF] h-8 w-8" />
              <span className="text-xl font-bold">AI Kitchen Magic</span>
            </div>
            <p className="text-gray-300 max-w-xs">
              Transforming ingredients into culinary masterpieces with a sprinkle of AI creativity.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 text-[#FFDEE2]">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
                  <Home className="w-4 h-4" />
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link to="/recipe-finder" className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
                  <ChefHat className="w-4 h-4" />
                  <span>Recipe Finder</span>
                </Link>
              </li>
              <li>
                <Link to="/recipe-library" className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
                  <BookOpen className="w-4 h-4" />
                  <span>Recipe Library</span>
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 text-[#FFDEE2]">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-gray-300">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span>support@aikitchenmagic.com</span>
              </li>
              <li className="flex items-center gap-2 text-gray-300">
                <MapPin className="w-4 h-4 flex-shrink-0" />
                <span>123 Foodie Street, Culinary City, FC 12345</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 text-[#FFDEE2]">Newsletter</h3>
            <p className="text-gray-300 mb-4">
              Subscribe to get the latest recipes and cooking tips.
            </p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Your email" 
                className="px-4 py-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-[#E5DEFF]"
              />
              <button className="bg-[#9b87f5] text-white px-4 py-2 rounded hover:bg-[#7E69AB] transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} AI Kitchen Magic. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
