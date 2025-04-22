
import IngredientForm from "@/components/IngredientForm";
import RecipeCard from "@/components/RecipeCard";
import { useState } from "react";
import { toast } from "sonner";

interface Recipe {
  title: string;
  description: string;
  ingredients: string[];
  instructions: string[];
}

const RecipeFinder = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [generatedRecipe, setGeneratedRecipe] = useState<Recipe | null>(null);

  const generateRecipe = async (ingredients: string) => {
    setIsLoading(true);
    try {
      // Simulate API call
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
    <div className="min-h-screen bg-gradient-to-br from-[#FDE1D3] via-[#E5DEFF] to-[#FFDEE2]">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-[#403E43] mb-8 text-center">Recipe Finder</h1>
        <div className="flex flex-col items-center space-y-8">
          <IngredientForm onSubmit={generateRecipe} isLoading={isLoading} />
          {generatedRecipe && (
            <div className="w-full max-w-md">
              <h2 className="text-2xl font-medium text-[#403E43] mb-4">Your Generated Recipe</h2>
              <RecipeCard {...generatedRecipe} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RecipeFinder;
