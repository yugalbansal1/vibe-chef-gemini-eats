
import { Link } from "react-router-dom";
import { ChefHat, BookOpen, Sparkles, Utensils } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FDE1D3] via-[#E5DEFF] to-[#FFDEE2]">
      {/* Hero Section */}
      <div className="container mx-auto px-4 pt-32 pb-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-7xl font-bold text-[#403E43] mb-6 animate-fade-in">
            🍳 AI Kitchen Magic 🌈
          </h1>
          <p className="text-2xl text-[#6E59A5] mb-12 max-w-3xl mx-auto leading-relaxed tracking-wide shadow-sm p-4 bg-white/30 backdrop-blur-sm rounded-xl">
            Transforming ingredients into culinary masterpieces with a sprinkle of AI creativity. 
            Your personal Gen-Z chef is here to spice things up! ✨🥘
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/recipe-finder" className="w-full sm:w-auto">
              <Button
                className="w-full sm:w-auto bg-gradient-to-r from-[#9b87f5] to-[#D6BCFA] text-white hover:opacity-90 transition-all duration-300 transform hover:scale-105 shadow-lg px-8 py-6 text-lg"
              >
                <ChefHat className="mr-2" />
                Find Recipes Now
              </Button>
            </Link>
            <Link to="/recipe-library" className="w-full sm:w-auto">
              <Button
                variant="outline"
                className="w-full sm:w-auto border-2 border-[#6E59A5] text-[#6E59A5] hover:bg-[#E5DEFF]/50 transition-all duration-300 transform hover:scale-105 shadow-md px-8 py-6 text-lg"
              >
                <BookOpen className="mr-2" />
                Browse Library
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white/30 backdrop-blur-sm py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-[#403E43] mb-16">Magical Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<ChefHat className="w-12 h-12 text-[#9b87f5]" />}
              title="AI Recipe Finder"
              description="Enter ingredients you have on hand, and our AI will whip up creative recipe ideas just for you. No more food waste or boring meals!"
            />
            <FeatureCard 
              icon={<BookOpen className="w-12 h-12 text-[#D6BCFA]" />}
              title="Recipe Library"
              description="Browse our curated collection of trendy, Gen-Z approved recipes with vibrant colors and innovative flavor combinations."
            />
            <FeatureCard 
              icon={<Sparkles className="w-12 h-12 text-[#FFDEE2]" />}
              title="Customizable Results"
              description="Connect your Gemini API key for even more personalized and creative recipe suggestions tailored to your taste."
            />
          </div>
        </div>
      </div>

      {/* How it Works Section */}
      <div className="py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-[#403E43] mb-16">How It Works</h2>
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-16">
              <div className="md:w-1/2">
                <div className="bg-white/40 backdrop-blur-sm p-6 rounded-2xl shadow-md">
                  <h3 className="text-2xl font-bold text-[#6E59A5] mb-4">1. Enter Your Ingredients</h3>
                  <p className="text-[#403E43]">
                    Simply type in whatever ingredients you have available in your kitchen. 
                    Our AI will work with whatever you've got!
                  </p>
                </div>
              </div>
              <div className="md:w-1/2 bg-gradient-to-r from-[#FDE1D3] to-[#FFDEE2] p-8 rounded-2xl shadow-lg flex items-center justify-center">
                <Utensils className="w-24 h-24 text-white" />
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row-reverse items-center justify-between gap-8 mb-16">
              <div className="md:w-1/2">
                <div className="bg-white/40 backdrop-blur-sm p-6 rounded-2xl shadow-md">
                  <h3 className="text-2xl font-bold text-[#6E59A5] mb-4">2. Get Personalized Recipes</h3>
                  <p className="text-[#403E43]">
                    Our AI chef analyzes your ingredients and creates custom recipes 
                    that are both delicious and doable!
                  </p>
                </div>
              </div>
              <div className="md:w-1/2 bg-gradient-to-r from-[#E5DEFF] to-[#D6BCFA] p-8 rounded-2xl shadow-lg flex items-center justify-center">
                <ChefHat className="w-24 h-24 text-white" />
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="md:w-1/2">
                <div className="bg-white/40 backdrop-blur-sm p-6 rounded-2xl shadow-md">
                  <h3 className="text-2xl font-bold text-[#6E59A5] mb-4">3. Cook & Enjoy!</h3>
                  <p className="text-[#403E43]">
                    Follow the step-by-step instructions to create your culinary masterpiece, 
                    then share your creation with friends!
                  </p>
                </div>
              </div>
              <div className="md:w-1/2 bg-gradient-to-r from-[#9b87f5] to-[#6E59A5] p-8 rounded-2xl shadow-lg flex items-center justify-center">
                <Sparkles className="w-24 h-24 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => {
  return (
    <div className="bg-white/50 backdrop-blur-sm p-8 rounded-xl shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className="flex flex-col items-center text-center">
        <div className="mb-4 p-4 bg-white/60 rounded-full shadow-inner">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-[#403E43] mb-2">{title}</h3>
        <p className="text-[#6E59A5]">{description}</p>
      </div>
    </div>
  );
};

export default Index;
