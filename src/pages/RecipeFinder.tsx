
import IngredientForm from "@/components/IngredientForm";
import RecipeCard from "@/components/RecipeCard";
import { useState } from "react";
import { toast } from "sonner";
import { Sparkles, Key, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

interface Recipe {
  title: string;
  description: string;
  ingredients: string[];
  instructions: string[];
  image?: string;
}

const RecipeFinder = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [generatedRecipe, setGeneratedRecipe] = useState<Recipe | null>(null);
  const [showApiKeyInput, setShowApiKeyInput] = useState(false);
  const [apiKey, setApiKey] = useState(localStorage.getItem("geminiApiKey") || "");

  const saveApiKey = () => {
    if (apiKey.trim()) {
      localStorage.setItem("geminiApiKey", apiKey.trim());
      toast.success("API key saved successfully!", {
        icon: <Key className="text-green-500" />,
      });
      setShowApiKeyInput(false);
    } else {
      toast.error("Please enter a valid API key", {
        icon: <AlertCircle className="text-red-500" />,
      });
    }
  };

  const generateRecipe = async (ingredients: string) => {
    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // In a real application, you would use the stored apiKey here to make the Gemini API call
      // const storedApiKey = localStorage.getItem("geminiApiKey");
      
      const mockImages = [
        "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3",
        "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3",
        "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-4.0.3",
        "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3",
      ];
      
      const mockRecipe = {
        title: "Custom Recipe with " + ingredients.split(",")[0],
        description: "A delicious recipe created just for you using your ingredients",
        image: mockImages[Math.floor(Math.random() * mockImages.length)],
        ingredients: ingredients.split(",").map(i => i.trim()),
        instructions: [
          "Prepare all your ingredients and preheat your cooking surface.",
          "Start by combining the main ingredients in a bowl.",
          "Cook over medium heat until properly done.",
          "Add seasonings to taste and garnish before serving.",
          "This recipe would be more detailed with a valid Gemini API key."
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
    <div className="min-h-screen bg-gradient-to-br from-[#FDE1D3] via-[#E5DEFF] to-[#FFDEE2] pt-32 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-[#403E43] mb-4 animate-fade-in">
              Recipe Alchemist 🧪
            </h1>
            <p className="text-[#6E59A5] max-w-2xl mx-auto mb-2">
              Enter ingredients you have, and our AI will create a delicious recipe just for you!
              For the best results, connect your Gemini API key.
            </p>
            <Button 
              variant="outline" 
              onClick={() => setShowApiKeyInput(!showApiKeyInput)}
              className="text-sm"
            >
              <Key className="mr-2 h-4 w-4" />
              {localStorage.getItem("geminiApiKey") ? "Update Gemini API Key" : "Add Gemini API Key"}
            </Button>
          </div>

          {showApiKeyInput && (
            <div className="w-full max-w-lg mx-auto backdrop-blur-sm bg-white/50 rounded-xl p-6 shadow-lg border border-[#E5DEFF]/30 animate-scale-in">
              <h3 className="text-lg font-medium text-[#403E43] mb-4">Connect Your Gemini API Key</h3>
              <p className="text-sm text-[#6E59A5] mb-4">
                To get the most personalized recipe suggestions, add your Google Gemini API key. 
                Your key is stored locally and never sent to our servers.
              </p>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="apiKey">Gemini API Key</Label>
                  <Input
                    id="apiKey"
                    type="password"
                    value={apiKey}
                    onChange={(e) => setApiKey(e.target.value)}
                    placeholder="Enter your Gemini API key"
                    className="bg-white/70"
                  />
                </div>
                <Button onClick={saveApiKey} className="w-full">
                  Save API Key
                </Button>
              </div>
            </div>
          )}

          <Separator className="bg-white/50" />

          <div className="flex flex-col items-center space-y-8">
            <div className="w-full max-w-lg backdrop-blur-sm bg-white/40 rounded-xl p-6 shadow-lg border border-[#E5DEFF]/30">
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
