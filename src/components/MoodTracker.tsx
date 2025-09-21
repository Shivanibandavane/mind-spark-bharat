import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const moods = [
  { emoji: "😢", label: "Sad", value: 1, color: "hsl(220 15% 65%)" },
  { emoji: "😟", label: "Worried", value: 2, color: "hsl(25 40% 70%)" },
  { emoji: "😐", label: "Okay", value: 3, color: "hsl(45 50% 75%)" },
  { emoji: "😊", label: "Happy", value: 4, color: "hsl(140 50% 70%)" },
  { emoji: "🥰", label: "Amazing", value: 5, color: "hsl(280 60% 75%)" },
];

export function MoodTracker() {
  const [selectedMood, setSelectedMood] = useState<number | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleMoodSelect = (value: number) => {
    setSelectedMood(value);
    setTimeout(() => {
      setIsSubmitted(true);
    }, 500);
  };

  if (isSubmitted) {
    return (
      <Card className="p-8 bg-gradient-hope shadow-warm animate-glow-pulse">
        <div className="text-center">
          <div className="text-6xl mb-4 animate-gentle-bounce">
            {moods.find(m => m.value === selectedMood)?.emoji}
          </div>
          <h3 className="text-xl font-semibold mb-2 text-card-foreground">
            Thank you for sharing
          </h3>
          <p className="text-muted-foreground mb-6">
            I'm here to support you. Let's work together to make today better.
          </p>
          <Button 
            variant="secondary" 
            onClick={() => setIsSubmitted(false)}
            className="transition-all duration-300 hover:scale-105"
          >
            Track Again
          </Button>
        </div>
      </Card>
    );
  }

  return (
    <Card className="p-8 bg-gradient-gentle shadow-soft">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-semibold mb-2 text-card-foreground">
          How are you feeling right now?
        </h3>
        <p className="text-muted-foreground">
          Your feelings matter, and sharing them is the first step to healing.
        </p>
      </div>
      
      <div className="grid grid-cols-5 gap-4">
        {moods.map((mood) => (
          <button
            key={mood.value}
            onClick={() => handleMoodSelect(mood.value)}
            className={`
              p-4 rounded-2xl border-2 transition-all duration-300 hover:scale-110 
              ${selectedMood === mood.value 
                ? 'border-primary shadow-glow bg-primary/10' 
                : 'border-border hover:border-primary/50 bg-card hover:shadow-soft'
              }
            `}
            style={{
              boxShadow: selectedMood === mood.value 
                ? `0 8px 32px ${mood.color}40` 
                : undefined
            }}
          >
            <div className="text-4xl mb-2 animate-float" 
                 style={{ animationDelay: `${mood.value * 0.2}s` }}>
              {mood.emoji}
            </div>
            <div className="text-sm font-medium text-foreground">
              {mood.label}
            </div>
          </button>
        ))}
      </div>
    </Card>
  );
}