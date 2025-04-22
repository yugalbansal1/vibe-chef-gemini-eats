
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ChefHat } from "lucide-react";

interface IngredientFormProps {
  onSubmit: (ingredients: string) => void;
  isLoading: boolean;
}

const IngredientForm = ({ onSubmit, isLoading }: IngredientFormProps) => {
  const [ingredients, setIngredients] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(ingredients);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md space-y-4">
      <div className="space-y-2">
        <h2 className="text-xl font-medium text-gray-800">Enter Your Ingredients</h2>
        <p className="text-gray-600 text-sm">
          List your ingredients separated by commas
        </p>
      </div>
      <Input
        value={ingredients}
        onChange={(e) => setIngredients(e.target.value)}
        placeholder="e.g., chicken, rice, tomatoes"
        className="bg-white/50 border-[#E5DEFF]/30"
      />
      <Button 
        type="submit"
        disabled={isLoading}
        className="w-full bg-gradient-to-r from-[#FFDEE2] to-[#E5DEFF] text-gray-800 hover:opacity-90"
      >
        {isLoading ? (
          "Cooking up something special..."
        ) : (
          <>
            <ChefHat className="mr-2 h-4 w-4" />
            Generate Recipe
          </>
        )}
      </Button>
    </form>
  );
};

export default IngredientForm;
