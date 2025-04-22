
import RecipeCard from "@/components/RecipeCard";
import { prebuiltRecipes } from "@/data/prebuiltRecipes";

const RecipeLibrary = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#E5DEFF] via-[#FDE1D3] to-[#FFDEE2]">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-[#403E43] mb-8 text-center">Recipe Library</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {prebuiltRecipes.map((recipe, index) => (
            <RecipeCard key={index} {...recipe} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecipeLibrary;
