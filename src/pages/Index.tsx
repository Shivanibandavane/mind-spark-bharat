import { WelcomeHeader } from "@/components/WelcomeHeader";
import { MoodTracker } from "@/components/MoodTracker";
import { AICompanion } from "@/components/AICompanion";
import { QuickUplift } from "@/components/QuickUplift";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-gentle">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="space-y-8">
          {/* Welcome Section */}
          <WelcomeHeader />
          
          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Left Column */}
            <div className="space-y-8">
              <MoodTracker />
              <QuickUplift />
            </div>
            
            {/* Right Column */}
            <div className="space-y-8">
              <AICompanion />
            </div>
          </div>
          
          {/* Footer with encouraging message */}
          <div className="text-center py-8">
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Remember: Healing isn't linear, and every small step counts. You're exactly where you need to be right now. 💙
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
