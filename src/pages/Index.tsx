
import { Link } from "react-router-dom";
import { ChefHat } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFDEE2] via-[#FDE1D3] to-[#E5DEFF] flex items-center justify-center">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-12">
          <h1 className="text-6xl font-bold text-[#403E43] mb-6">
            ✨ AI Kitchen Magic ✨
          </h1>
          <p className="text-xl text-[#6E59A5] mb-12 max-w-2xl mx-auto">
            Transform your ingredients into delicious recipes with a touch of AI magic. 
            Your personal Gen-Z chef is here to help! ✨🍳
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center max-w-md mx-auto">
          <Link to="/recipe-finder" className="w-full">
            <Button
              className="w-full bg-gradient-to-r from-[#9b87f5] to-[#D6BCFA] text-white hover:opacity-90"
            >
              <ChefHat className="mr-2" />
              Find Recipes
            </Button>
          </Link>
          <Link to="/recipe-library" className="w-full">
            <Button
              variant="outline"
              className="w-full border-2 border-[#9b87f5] text-[#6E59A5] hover:bg-[#E5DEFF]/50"
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
