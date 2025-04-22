
import { useState } from "react";
import RecipeCard from "@/components/RecipeCard";
import IngredientForm from "@/components/IngredientForm";
import { prebuiltRecipes } from "@/data/prebuiltRecipes";
import { toast } from "sonner";

interface Recipe {
  title: string;
  description: string;
  ingredients: string[];
  instructions: string[];
}

const Index = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [generatedRecipe, setGeneratedRecipe] = useState<Recipe | null>(null);

  const generateRecipe = async (ingredients: string) => {
    setIsLoading(true);
    try {
      // In a real app, this would call the Gemini API
      // For now, we'll simulate a response
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      const mockRecipe = {
        title: "Custom Recipe with " + ingredients.split(",")[0],
        description: "A delicious recipe using your ingredients",
        ingredients: ingredients.split(",").map(i => i.trim()),
        instructions: [
          "This is a placeholder instruction.",
          "In a real app, these would come from the Gemini API.",
          "The API would generate specific steps based on the ingredients."
        ]
      };
      
      setGeneratedRecipe(mockRecipe);
      toast.success("Recipe generated successfully!");
    } catch (error) {
      toast.error("Failed to generate recipe. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FFDEE2] via-[#FDE1D3] to-[#E5DEFF]">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">✨ AI Kitchen Magic ✨</h1>
          <p className="text-gray-600 max-w-md mx-auto">
            Transform your ingredients into delicious recipes with a touch of AI magic
          </p>
        </div>

        <div className="flex flex-col items-center space-y-8">
          <IngredientForm onSubmit={generateRecipe} isLoading={isLoading} />

          {generatedRecipe && (
            <div className="w-full max-w-md">
              <h2 className="text-2xl font-medium text-gray-800 mb-4">Your Generated Recipe</h2>
              <RecipeCard {...generatedRecipe} />
            </div>
          )}

          <div className="w-full max-w-4xl">
            <h2 className="text-2xl font-medium text-gray-800 mb-4">Trending Recipes</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {prebuiltRecipes.map((recipe, index) => (
                <RecipeCard key={index} {...recipe} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
