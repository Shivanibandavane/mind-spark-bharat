import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Shield, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/wellness-hero.jpg";

export function WelcomeHeader() {
  const currentHour = new Date().getHours();
  const getGreeting = () => {
    if (currentHour < 12) return "Good morning";
    if (currentHour < 18) return "Good afternoon";
    return "Good evening";
  };

  return (
    <div className="relative overflow-hidden">
      <Card className="relative p-8 bg-gradient-sunrise shadow-warm border-0 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0 opacity-20"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        />
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-primary/20 via-transparent to-secondary/20" />
        <div className="relative z-10">
          <div className="text-center mb-6">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center animate-glow-pulse hover-lift">
                <Heart className="w-8 h-8 text-primary animate-heartbeat" />
              </div>
            </div>
            <h1 className="text-4xl font-bold mb-2 text-card-foreground animate-fade-in-up">
              {getGreeting()}! 🌟
            </h1>
            <p className="text-xl text-card-foreground/80 mb-4 animate-fade-in-up animate-stagger-1">
              Welcome to your safe space for healing and growth
            </p>
            <p className="text-muted-foreground max-w-2xl mx-auto animate-fade-in-up animate-stagger-2">
              I'm here to listen, support, and help you navigate whatever you're feeling. 
              This is your judgment-free zone where every emotion is valid and every step forward is celebrated.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4 max-w-3xl mx-auto">
            <div className="bg-background/20 p-4 rounded-2xl backdrop-blur-sm shadow-soft hover-lift hover-glow transition-all duration-300 animate-fade-in-up animate-stagger-3">
              <div className="flex items-center gap-3 mb-2">
                <Shield className="w-5 h-5 text-primary animate-gentle-bounce" />
                <h3 className="font-semibold text-card-foreground">100% Private</h3>
              </div>
              <p className="text-sm text-card-foreground/70">
                Your conversations and data are completely secure and confidential
              </p>
            </div>

            <div className="bg-background/20 p-4 rounded-2xl backdrop-blur-sm shadow-soft hover-lift hover-glow transition-all duration-300 animate-fade-in-up animate-stagger-4">
              <div className="flex items-center gap-3 mb-2">
                <Heart className="w-5 h-5 text-primary animate-heartbeat" />
                <h3 className="font-semibold text-card-foreground">Always Caring</h3>
              </div>
              <p className="text-sm text-card-foreground/70">
                Non-judgmental support available whenever you need it
              </p>
            </div>

            <div className="bg-background/20 p-4 rounded-2xl backdrop-blur-sm shadow-soft hover-lift hover-glow transition-all duration-300 animate-fade-in-up animate-stagger-4">
              <div className="flex items-center gap-3 mb-2">
                <Sparkles className="w-5 h-5 text-primary animate-shimmer" />
                <h3 className="font-semibold text-card-foreground">Personalized</h3>
              </div>
              <p className="text-sm text-card-foreground/70">
                Tailored support that adapts to your unique needs and culture
              </p>
            </div>
          </div>

          <div className="text-center mt-8 animate-fade-in-up animate-stagger-4">
            <Button 
              asChild
              variant="healing" 
              size="lg" 
              className="animate-glow-pulse hover-lift"
            >
              <Link to="/auth">
                <Sparkles className="w-5 h-5 mr-2 animate-shimmer" />
                Start Your Wellness Journey
              </Link>
            </Button>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-4 right-4 text-6xl opacity-30 animate-float">🌸</div>
        <div className="absolute bottom-4 left-4 text-4xl opacity-30 animate-float" style={{ animationDelay: '2s' }}>✨</div>
        <div className="absolute top-1/2 right-8 text-3xl opacity-30 animate-float" style={{ animationDelay: '4s' }}>🦋</div>
        <div className="absolute top-8 left-8 text-2xl opacity-20 animate-float" style={{ animationDelay: '1s' }}>🌙</div>
      </Card>
    </div>
  );
}