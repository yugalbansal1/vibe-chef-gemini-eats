
import { Link } from "react-router-dom";
import { ChefHat } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FDE1D3] via-[#E5DEFF] to-[#FFDEE2] flex items-center justify-center">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-12 space-y-6">
          <h1 className="text-7xl font-bold text-[#403E43] mb-6 animate-fade-in">
            🍳 AI Kitchen Magic 🌈
          </h1>
          <p className="text-2xl text-[#6E59A5] mb-12 max-w-3xl mx-auto leading-relaxed tracking-wide shadow-sm p-4 bg-white/30 backdrop-blur-sm rounded-xl">
            Transforming ingredients into culinary masterpieces with a sprinkle of AI creativity. 
            Your personal Gen-Z chef is here to spice things up! ✨🥘
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center max-w-md mx-auto">
          <Link to="/recipe-finder" className="w-full">
            <Button
              className="w-full bg-gradient-to-r from-[#9b87f5] to-[#D6BCFA] text-white hover:opacity-90 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <ChefHat className="mr-2" />
              Find Recipes
            </Button>
          </Link>
          <Link to="/recipe-library" className="w-full">
            <Button
              variant="outline"
              className="w-full border-2 border-[#6E59A5] text-[#6E59A5] hover:bg-[#E5DEFF]/50 transition-all duration-300 transform hover:scale-105 shadow-md"
            >
              Browse Library
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Index;
