
import IngredientForm from "@/components/IngredientForm";
import RecipeCard from "@/components/RecipeCard";
import { useState } from "react";
import { toast } from "sonner";
import { Sparkles } from "lucide-react";

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
      toast.success("Recipe generated successfully!", {
        icon: <Sparkles className="text-purple-500" />,
      });
    } catch (error) {
      toast.error("Failed to generate recipe. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FDE1D3] via-[#E5DEFF] to-[#FFDEE2] py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="text-5xl font-bold text-[#403E43] text-center mb-8 animate-fade-in">
            Recipe Alchemist 🧪
          </h1>
          <div className="flex flex-col items-center space-y-8">
            <div className="w-full max-w-lg backdrop-blur-sm bg-white/30 rounded-xl p-6 shadow-lg border border-[#E5DEFF]/30">
              <IngredientForm onSubmit={generateRecipe} isLoading={isLoading} />
            </div>
            {generatedRecipe && (
              <div className="w-full max-w-md animate-scale-in">
                <h2 className="text-2xl font-medium text-[#403E43] mb-4 text-center">
                  Your Magical Recipe ✨
                </h2>
                <RecipeCard {...generatedRecipe} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeFinder;
