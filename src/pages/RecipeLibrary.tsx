
import RecipeCard from "@/components/RecipeCard";
import { prebuiltRecipes } from "@/data/prebuiltRecipes";
import { BookOpen, Search } from "lucide-react";
import { useState } from "react";
import { Input } from "@/components/ui/input";

const RecipeLibrary = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  const filteredRecipes = prebuiltRecipes.filter(
    recipe => 
      recipe.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      recipe.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      recipe.ingredients.some(ingredient => 
        ingredient.toLowerCase().includes(searchQuery.toLowerCase())
      )
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#E5DEFF] via-[#FDE1D3] to-[#FFDEE2] pt-32 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-bold text-[#403E43] mb-6 text-center flex items-center justify-center gap-4 animate-fade-in">
            <BookOpen className="text-[#6E59A5]" />
            Recipe Library
          </h1>
          <p className="text-center text-[#6E59A5] mb-8 max-w-2xl mx-auto">
            Browse our curated collection of trendy, Instagram-worthy recipes that will impress your friends and delight your taste buds!
          </p>
          
          <div className="mb-8 max-w-md mx-auto">
            <div className="relative">
              <Search className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400" />
              <Input
                type="text"
                placeholder="Search recipes by title, description, or ingredient..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-white/50 backdrop-blur-sm border-[#E5DEFF] focus:border-[#6E59A5] transition-all"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredRecipes.length > 0 ? (
              filteredRecipes.map((recipe, index) => (
                <div 
                  key={index} 
                  className="transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                >
                  <RecipeCard {...recipe} />
                </div>
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <p className="text-lg text-[#6E59A5]">No recipes found matching your search criteria.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeLibrary;
