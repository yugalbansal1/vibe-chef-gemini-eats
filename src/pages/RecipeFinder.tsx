
import IngredientForm from "@/components/IngredientForm";
import RecipeCard from "@/components/RecipeCard";
import { useState } from "react";
import { toast } from "sonner";
import { Sparkles, ChefHat } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

// Hard-coded Gemini API key (replace with your actual key)
const GEMINI_API_KEY = "AIzaSyBHMrXOl2a4lHQXnKR6Rdyo_MM4RiQFMv0";

interface Recipe {
  title: string;
  description: string;
  ingredients: string[];
  instructions: string[];
  image?: string;
  type: "vegetarian" | "non-vegetarian";
}

const RecipeFinder = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [suggestions, setSuggestions] = useState<Recipe[]>([]);
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
  const [dietType, setDietType] = useState<"vegetarian" | "non-vegetarian">("vegetarian");

  const generateRecipes = async (ingredients: string) => {
    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // In a real application, you would use the GEMINI_API_KEY here to make the API call
      
      const mockImages = [
        "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3",
        "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3",
        "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-4.0.3",
        "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3",
      ];

      // Generate mock recipes based on diet preference
      const mockRecipes: Recipe[] = [];
      
      if (dietType === "vegetarian") {
        mockRecipes.push(
          {
            title: "Gourmet Veggie Pasta with " + ingredients.split(",")[0],
            description: "A delicious vegetarian pasta dish with seasonal vegetables",
            image: mockImages[0],
            ingredients: [
              ...ingredients.split(",").map(i => i.trim()),
              "pasta", 
              "olive oil", 
              "garlic", 
              "fresh herbs"
            ],
            instructions: [
              "Prepare all vegetables by washing and chopping them.",
              "Boil pasta according to package instructions.",
              "Sauté garlic and vegetables in olive oil.",
              "Mix pasta with the vegetables and add fresh herbs.",
              "Season to taste and serve hot."
            ],
            type: "vegetarian"
          },
          {
            title: "Healthy Buddha Bowl",
            description: "A nutrient-packed vegetarian bowl with grains and vegetables",
            image: mockImages[1],
            ingredients: [
              ...ingredients.split(",").map(i => i.trim()),
              "quinoa", 
              "avocado", 
              "leafy greens", 
              "tahini dressing"
            ],
            instructions: [
              "Cook quinoa according to package instructions.",
              "Prepare vegetables by washing and chopping them.",
              "Arrange quinoa and vegetables in a bowl.",
              "Slice avocado and add to the bowl.",
              "Drizzle with tahini dressing and serve."
            ],
            type: "vegetarian"
          },
          {
            title: "Mediterranean Veggie Stir-fry",
            description: "A quick and flavorful vegetarian stir-fry with Mediterranean influences",
            image: mockImages[2],
            ingredients: [
              ...ingredients.split(",").map(i => i.trim()),
              "feta cheese", 
              "olives", 
              "bell peppers", 
              "red onion"
            ],
            instructions: [
              "Heat olive oil in a large pan or wok.",
              "Add chopped vegetables and sauté until tender-crisp.",
              "Season with Mediterranean herbs and spices.",
              "Add crumbled feta cheese and olives toward the end.",
              "Serve hot with crusty bread or over rice."
            ],
            type: "vegetarian"
          }
        );
      } else {
        mockRecipes.push(
          {
            title: "Grilled Chicken with " + ingredients.split(",")[0],
            description: "A protein-packed grilled chicken dish with flavorful sides",
            image: mockImages[0],
            ingredients: [
              ...ingredients.split(",").map(i => i.trim()),
              "chicken breast", 
              "olive oil", 
              "garlic", 
              "fresh herbs"
            ],
            instructions: [
              "Marinate chicken breast with olive oil, garlic, and herbs.",
              "Prepare vegetables by washing and chopping them.",
              "Grill chicken until fully cooked (internal temp of 165°F).",
              "Sauté vegetables as a side dish.",
              "Serve chicken with vegetables and your favorite sauce."
            ],
            type: "non-vegetarian"
          },
          {
            title: "Classic Beef Stir-fry",
            description: "A savory beef stir-fry with mixed vegetables",
            image: mockImages[1],
            ingredients: [
              ...ingredients.split(",").map(i => i.trim()),
              "beef strips", 
              "soy sauce", 
              "ginger", 
              "sesame oil"
            ],
            instructions: [
              "Slice beef into thin strips and marinate in soy sauce.",
              "Heat oil in a wok or large pan over high heat.",
              "Stir-fry beef until browned, then remove from pan.",
              "Cook vegetables in the same pan until tender-crisp.",
              "Return beef to the pan, add sauce, and stir to combine.",
              "Serve hot over rice or noodles."
            ],
            type: "non-vegetarian"
          },
          {
            title: "Seafood Pasta Medley",
            description: "A luxurious pasta dish with mixed seafood",
            image: mockImages[2],
            ingredients: [
              ...ingredients.split(",").map(i => i.trim()),
              "mixed seafood (shrimp, calamari, mussels)", 
              "white wine", 
              "tomatoes", 
              "fresh basil"
            ],
            instructions: [
              "Cook pasta according to package instructions.",
              "In a separate pan, sauté garlic in olive oil.",
              "Add seafood and cook until just done.",
              "Add white wine and let it reduce slightly.",
              "Add tomatoes and other vegetables, then simmer.",
              "Toss with pasta, garnish with fresh basil, and serve."
            ],
            type: "non-vegetarian"
          }
        );
      }
      
      setSuggestions(mockRecipes);
      setSelectedRecipe(null);
      
      toast.success("Recipe suggestions generated!", {
        icon: <Sparkles className="text-purple-500" />,
      });
    } catch (error) {
      toast.error("Failed to generate recipe suggestions. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const selectRecipe = (recipe: Recipe) => {
    setSelectedRecipe(recipe);
    toast.success("Recipe selected! Enjoy cooking!", {
      icon: <ChefHat className="text-purple-500" />,
    });
  };

  return (
    <div className={`min-h-screen transition-all duration-500 ${
      dietType === "vegetarian" 
        ? "bg-gradient-to-br from-[#FDE1D3] via-[#E5DEFF] to-[#FFDEE2]" 
        : "bg-gradient-to-br from-[#FDE1D3] via-[#FFB6B6] to-[#FFDEE2]"
    } pt-32 pb-16`}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-[#403E43] mb-4 animate-fade-in">
              Recipe Alchemist 🧪
            </h1>
            <p className="text-[#6E59A5] max-w-2xl mx-auto mb-6">
              Enter ingredients you have, and our AI will create delicious recipe suggestions just for you!
            </p>
            
            <div className="w-full max-w-md mx-auto backdrop-blur-sm bg-white/50 rounded-xl p-4 shadow-md mb-6">
              <RadioGroup 
                value={dietType} 
                onValueChange={(value) => setDietType(value as "vegetarian" | "non-vegetarian")}
                className="flex justify-center gap-8"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="vegetarian" id="vegetarian" />
                  <Label htmlFor="vegetarian" className="font-medium text-[#6E59A5]">Vegetarian</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="non-vegetarian" id="non-vegetarian" />
                  <Label htmlFor="non-vegetarian" className="font-medium text-[#6E59A5]">Non-Vegetarian</Label>
                </div>
              </RadioGroup>
            </div>
          </div>

          <Separator className="bg-white/50" />

          <div className="flex flex-col items-center space-y-8">
            <div className="w-full max-w-lg backdrop-blur-sm bg-white/40 rounded-xl p-6 shadow-lg border border-[#E5DEFF]/30">
              <IngredientForm onSubmit={generateRecipes} isLoading={isLoading} dietType={dietType} />
            </div>
            
            {suggestions.length > 0 && !selectedRecipe && (
              <div className="w-full animate-scale-in">
                <h2 className="text-2xl font-medium text-[#403E43] mb-4 text-center">
                  Choose Your Recipe ✨
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {suggestions.map((recipe, index) => (
                    <div 
                      key={index} 
                      onClick={() => selectRecipe(recipe)}
                      className="cursor-pointer transform transition-all duration-300 hover:scale-105"
                    >
                      <div className="w-full h-48 overflow-hidden rounded-t-lg">
                        <img 
                          src={recipe.image} 
                          alt={recipe.title} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-4 backdrop-blur-sm bg-white/50 rounded-b-lg">
                        <h3 className="font-bold text-lg text-[#403E43]">{recipe.title}</h3>
                        <p className="text-sm text-[#6E59A5] line-clamp-2">{recipe.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {selectedRecipe && (
              <div className="w-full max-w-xl animate-scale-in">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-2xl font-medium text-[#403E43]">
                    Your Magical Recipe ✨
                  </h2>
                  <Button 
                    variant="outline" 
                    onClick={() => setSelectedRecipe(null)}
                    className="text-[#6E59A5] border-[#6E59A5]"
                  >
                    Back to Suggestions
                  </Button>
                </div>
                <RecipeCard {...selectedRecipe} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeFinder;
