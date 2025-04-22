
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface RecipeCardProps {
  title: string;
  description: string;
  ingredients: string[];
  instructions: string[];
  image?: string;
}

const RecipeCard = ({ title, description, ingredients, instructions, image }: RecipeCardProps) => {
  return (
    <Card className="w-full max-w-md backdrop-blur-sm bg-white/30 border-[#FFDEE2]/20 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden">
      {image && (
        <div className="w-full h-52 overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
          />
        </div>
      )}
      <CardHeader>
        <CardTitle className="text-2xl font-medium text-gray-800">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <h3 className="font-medium text-gray-800 mb-2">Ingredients:</h3>
            <ul className="list-disc pl-5 space-y-1">
              {ingredients.map((ingredient, index) => (
                <li key={index} className="text-gray-600">{ingredient}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-medium text-gray-800 mb-2">Instructions:</h3>
            <ol className="list-decimal pl-5 space-y-2">
              {instructions.map((step, index) => (
                <li key={index} className="text-gray-600">{step}</li>
              ))}
            </ol>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default RecipeCard;
