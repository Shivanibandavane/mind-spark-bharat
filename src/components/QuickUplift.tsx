import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sparkles, Heart, Sun, Wind } from "lucide-react";

const affirmations = [
  "You are stronger than you think, and braver than you feel. 💙",
  "This moment is temporary, but your resilience is permanent. ✨",
  "You deserve love, kindness, and all the beautiful things life offers. 🌟",
  "Your feelings are valid, and you're handling them with grace. 🌸",
  "You have survived 100% of your difficult days. You're unstoppable. 💪",
  "You are worthy of happiness, peace, and inner calm. 🕊️",
  "Every breath you take is a testament to your strength. 🌿",
];

const breathingExercises = [
  { name: "4-7-8 Breathing", description: "Inhale for 4, hold for 7, exhale for 8", duration: "2 minutes" },
  { name: "Box Breathing", description: "Inhale, hold, exhale, hold - each for 4 counts", duration: "3 minutes" },
  { name: "Gentle Waves", description: "Breathe like ocean waves - slow and rhythmic", duration: "5 minutes" },
];

const quickTips = [
  "Step outside for 2 minutes and feel the fresh air on your face",
  "Name 5 things you can see, 4 you can hear, 3 you can touch",
  "Send a message to someone you care about",
  "Write down one thing you're grateful for right now",
  "Look in the mirror and say something kind to yourself",
  "Listen to your favorite uplifting song",
];

export function QuickUplift() {
  const [activeTab, setActiveTab] = useState<'affirmations' | 'breathing' | 'tips'>('affirmations');
  const [currentAffirmation, setCurrentAffirmation] = useState(affirmations[0]);
  const [isBreathingActive, setIsBreathingActive] = useState(false);

  const generateNewAffirmation = () => {
    const newAffirmation = affirmations[Math.floor(Math.random() * affirmations.length)];
    setCurrentAffirmation(newAffirmation);
  };

  const tabs = [
    { id: 'affirmations', label: 'Affirmations', icon: Heart },
    { id: 'breathing', label: 'Breathing', icon: Wind },
    { id: 'tips', label: 'Quick Tips', icon: Sun },
  ] as const;

  return (
    <Card className="p-6 bg-gradient-hope shadow-warm">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-semibold mb-2 text-card-foreground flex items-center justify-center gap-2">
          <Sparkles className="w-6 h-6 text-primary animate-pulse" />
          Instant Mood Uplift
        </h3>
        <p className="text-muted-foreground">
          Quick tools to brighten your day in just moments
        </p>
      </div>

      <div className="flex justify-center mb-6">
        <div className="bg-background/30 p-1 rounded-xl flex gap-1">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <Button
                key={tab.id}
                variant={activeTab === tab.id ? "default" : "ghost"}
                size="sm"
                onClick={() => setActiveTab(tab.id)}
                className={`
                  transition-all duration-300 rounded-lg
                  ${activeTab === tab.id 
                    ? 'bg-primary text-primary-foreground shadow-soft' 
                    : 'hover:bg-background/20'
                  }
                `}
              >
                <Icon className="w-4 h-4 mr-2" />
                {tab.label}
              </Button>
            );
          })}
        </div>
      </div>

      <div className="min-h-[200px]">
        {activeTab === 'affirmations' && (
          <div className="text-center space-y-6">
            <div className="bg-background/20 p-6 rounded-2xl shadow-soft">
              <p className="text-lg leading-relaxed text-card-foreground font-medium">
                {currentAffirmation}
              </p>
            </div>
            <Button
              onClick={generateNewAffirmation}
              className="bg-secondary hover:bg-secondary-warm text-secondary-foreground transition-all duration-300 hover:scale-105 shadow-soft"
            >
              <Sparkles className="w-4 h-4 mr-2" />
              New Affirmation
            </Button>
          </div>
        )}

        {activeTab === 'breathing' && (
          <div className="space-y-4">
            {breathingExercises.map((exercise, index) => (
              <div key={index} className="bg-background/20 p-4 rounded-xl shadow-soft">
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="font-semibold text-card-foreground">{exercise.name}</h4>
                    <p className="text-sm text-muted-foreground">{exercise.description}</p>
                    <p className="text-xs text-muted-foreground mt-1">Duration: {exercise.duration}</p>
                  </div>
                  <Button
                    size="sm"
                    onClick={() => setIsBreathingActive(!isBreathingActive)}
                    className="bg-primary/10 hover:bg-primary/20 text-primary border border-primary/20 transition-all duration-300"
                  >
                    {isBreathingActive ? 'Stop' : 'Start'}
                  </Button>
                </div>
              </div>
            ))}
            {isBreathingActive && (
              <div className="text-center p-6 bg-primary/10 rounded-xl border border-primary/20 animate-glow-pulse">
                <div className="text-4xl mb-4 animate-gentle-bounce">🌬️</div>
                <p className="text-primary font-medium">Breathe along with the gentle rhythm...</p>
              </div>
            )}
          </div>
        )}

        {activeTab === 'tips' && (
          <div className="grid gap-3">
            {quickTips.map((tip, index) => (
              <div
                key={index}
                className="bg-background/20 p-4 rounded-xl shadow-soft hover:shadow-warm transition-all duration-300 hover:scale-[1.02] cursor-pointer"
              >
                <p className="text-card-foreground">{tip}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </Card>
  );
}