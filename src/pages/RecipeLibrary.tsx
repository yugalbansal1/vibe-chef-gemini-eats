
import RecipeCard from "@/components/RecipeCard";
import { prebuiltRecipes } from "@/data/prebuiltRecipes";
import { BookOpen, Search, X } from "lucide-react";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetClose } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

const RecipeLibrary = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  
  const filteredRecipes = prebuiltRecipes.filter(
    recipe => 
      recipe.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      recipe.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      recipe.ingredients.some(ingredient => 
        ingredient.toLowerCase().includes(searchQuery.toLowerCase())
      )
  );

  const handleRecipeClick = (recipe) => {
    setSelectedRecipe(recipe);
    setIsOpen(true);
  };

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
                  className="transform transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer"
                  onClick={() => handleRecipeClick(recipe)}
                >
                  <div className="w-full h-48 overflow-hidden rounded-t-lg">
                    <img 
                      src={recipe.image} 
                      alt={recipe.title} 
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                    />
                  </div>
                  <div className="p-4 backdrop-blur-sm bg-white/50 rounded-b-lg">
                    <h3 className="font-bold text-xl text-[#403E43]">{recipe.title}</h3>
                    <p className="text-sm text-[#6E59A5] line-clamp-2">{recipe.description}</p>
                  </div>
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

      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetContent className="w-full sm:max-w-md md:max-w-lg overflow-y-auto">
          <SheetHeader className="mb-4">
            <SheetTitle className="text-2xl font-bold text-[#403E43]">
              {selectedRecipe?.title}
            </SheetTitle>
            <SheetClose asChild>
              <Button variant="ghost" size="icon" className="absolute right-4 top-4">
                <X className="h-4 w-4" />
              </Button>
            </SheetClose>
          </SheetHeader>
          
          {selectedRecipe && (
            <div className="space-y-6 pr-6">
              {selectedRecipe.image && (
                <div className="w-full h-64 overflow-hidden rounded-lg">
                  <img 
                    src={selectedRecipe.image} 
                    alt={selectedRecipe.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              
              <p className="text-[#6E59A5]">{selectedRecipe.description}</p>
              
              <div>
                <h3 className="font-medium text-gray-800 mb-2">Ingredients:</h3>
                <ul className="list-disc pl-5 space-y-1">
                  {selectedRecipe.ingredients.map((ingredient, index) => (
                    <li key={index} className="text-gray-600">{ingredient}</li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="font-medium text-gray-800 mb-2">Instructions:</h3>
                <ol className="list-decimal pl-5 space-y-2">
                  {selectedRecipe.instructions.map((step, index) => (
                    <li key={index} className="text-gray-600">{step}</li>
                  ))}
                </ol>
              </div>
            </div>
          )}
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default RecipeLibrary;
