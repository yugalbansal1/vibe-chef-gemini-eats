
import { Link } from "react-router-dom";
import { ChefHat, BookOpen, Sparkles, Utensils, Star, Users, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="bg-gradient-to-br from-[#FDE1D3] via-[#E5DEFF] to-[#FFDEE2]">
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
              description="Choose between vegetarian and non-vegetarian preferences for personalized recipe suggestions tailored to your diet."
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

      {/* Customer Reviews Section */}
      <div className="bg-white/30 backdrop-blur-sm py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#403E43] mb-4">What Our Users Say</h2>
            <p className="text-[#6E59A5] max-w-2xl mx-auto">
              Our AI-powered recipe suggestions have transformed the way people cook at home.
              Here's what our satisfied users have to say about their experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <ReviewCard 
              name="Emma Johnson"
              role="Food Blogger"
              image="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80"
              stars={5}
              review="AI Kitchen Magic has completely transformed my cooking routine. I simply input what I have in my fridge, and it creates incredible recipes that never disappoint!"
            />
            <ReviewCard 
              name="David Chen"
              role="Home Cook"
              image="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80"
              stars={4}
              review="As someone who struggles with meal planning, this app has been a game-changer. The vegetarian recipe options are creative and delicious. Highly recommend!"
            />
            <ReviewCard 
              name="Sophia Williams"
              role="Chef Student"
              image="https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80"
              stars={5}
              review="The recipe suggestions are always spot-on and help me practice new cooking techniques. Even with limited ingredients, it comes up with amazing dishes!"
            />
          </div>
        </div>
      </div>

      {/* Community Section */}
      <div className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-[#403E43] mb-4">Join Our Foodie Community</h2>
              <p className="text-[#6E59A5] max-w-2xl mx-auto">
                Connect with other food enthusiasts, share your culinary creations, and get inspired by what others are cooking.
              </p>
            </div>

            <div className="bg-white/40 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden">
              <div className="p-8 md:p-12">
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="md:w-1/2">
                    <h3 className="text-2xl font-bold text-[#6E59A5] mb-4">Share Your Kitchen Magic</h3>
                    <p className="text-[#403E43] mb-6">
                      Subscribe to our newsletter to get weekly recipe inspiration, cooking tips, and exclusive content delivered straight to your inbox.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <input 
                        type="email" 
                        placeholder="Your email address" 
                        className="px-4 py-3 rounded-lg border border-[#E5DEFF] focus:outline-none focus:border-[#6E59A5] flex-grow"
                      />
                      <Button className="bg-gradient-to-r from-[#9b87f5] to-[#6E59A5] text-white hover:opacity-90">
                        <Heart className="mr-2 h-4 w-4" />
                        Join Now
                      </Button>
                    </div>
                  </div>
                  <div className="md:w-1/2">
                    <div className="grid grid-cols-3 gap-2">
                      <img src="https://images.unsplash.com/photo-1485921325833-c519f76c4927?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80" alt="Community food" className="rounded-lg" />
                      <img src="https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80" alt="Community food" className="rounded-lg" />
                      <img src="https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80" alt="Community food" className="rounded-lg" />
                      <img src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80" alt="Community food" className="rounded-lg" />
                      <img src="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80" alt="Community food" className="rounded-lg" />
                      <img src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80" alt="Community food" className="rounded-lg" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-[#6E59A5]/10 p-6 text-center">
                <div className="flex items-center justify-center gap-2 text-[#6E59A5]">
                  <Users className="h-5 w-5" />
                  <span className="font-medium">Join 10,000+ food enthusiasts in our community</span>
                </div>
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

const ReviewCard = ({ name, role, image, stars, review }: { name: string; role: string; image: string; stars: number; review: string }) => {
  return (
    <div className="bg-white/50 backdrop-blur-sm rounded-xl shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1 p-6">
      <div className="flex items-center gap-4 mb-4">
        <img src={image} alt={name} className="w-16 h-16 rounded-full object-cover" />
        <div>
          <h4 className="font-bold text-[#403E43]">{name}</h4>
          <p className="text-sm text-[#6E59A5]">{role}</p>
        </div>
      </div>
      <div className="flex mb-3">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className={`w-4 h-4 ${i < stars ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`} />
        ))}
      </div>
      <p className="text-[#403E43]">{review}</p>
    </div>
  );
};

export default Index;
