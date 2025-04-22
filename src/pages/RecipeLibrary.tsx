
import RecipeCard from "@/components/RecipeCard";
import { prebuiltRecipes } from "@/data/prebuiltRecipes";
import { BookOpen } from "lucide-react";

const RecipeLibrary = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#E5DEFF] via-[#FDE1D3] to-[#FFDEE2] py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-bold text-[#403E43] mb-12 text-center flex items-center justify-center gap-4 animate-fade-in">
            <BookOpen className="text-[#6E59A5]" />
            Recipe Library
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {prebuiltRecipes.map((recipe, index) => (
              <div 
                key={index} 
                className="transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              >
                <RecipeCard {...recipe} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeLibrary;
