import { useState, useRef, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Send, Heart, Sparkles } from "lucide-react";

interface Message {
  id: number;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const supportiveResponses = [
  "I hear you, and your feelings are completely valid. You're not alone in this journey. 💙",
  "It takes courage to share how you're feeling. That shows incredible strength. ✨",
  "I'm here to listen without any judgment. Your well-being is what matters most. 🤗",
  "Every emotion you feel is important. Let's work through this together, one step at a time. 🌟",
  "You're doing the best you can, and that's enough. I believe in your ability to overcome challenges. 💪",
  "Your feelings matter, and so do you. Remember, it's okay to not be okay sometimes. 🌸",
];

export function AICompanion() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hi there! I'm your personal wellness companion. I'm here to listen, support, and help you navigate whatever you're going through. What's on your mind today? 💙",
      isUser: false,
      timestamp: new Date(),
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputValue,
      isUser: true,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const randomResponse = supportiveResponses[Math.floor(Math.random() * supportiveResponses.length)];
      const aiMessage: Message = {
        id: messages.length + 2,
        text: randomResponse,
        isUser: false,
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, aiMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <Card className="h-[500px] flex flex-col bg-gradient-gentle shadow-soft">
      <div className="p-4 border-b border-border bg-gradient-calm rounded-t-lg">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center animate-glow-pulse">
            <Heart className="w-5 h-5 text-primary" />
          </div>
          <div>
            <h3 className="font-semibold text-card-foreground">Your Wellness Companion</h3>
            <p className="text-sm text-muted-foreground">Always here to listen and support</p>
          </div>
        </div>
      </div>

      <ScrollArea className="flex-1 p-4">
        <div className="space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`
                  max-w-[80%] p-3 rounded-2xl transition-all duration-300 hover:scale-[1.02]
                  ${message.isUser
                    ? 'bg-primary text-primary-foreground shadow-soft'
                    : 'bg-secondary shadow-warm'
                  }
                `}
              >
                <p className="text-sm leading-relaxed">{message.text}</p>
                <p className={`text-xs mt-1 opacity-70 ${message.isUser ? 'text-primary-foreground' : 'text-muted-foreground'}`}>
                  {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </p>
              </div>
            </div>
          ))}
          
          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-secondary p-3 rounded-2xl shadow-warm animate-pulse">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                  <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                </div>
              </div>
            </div>
          )}
        </div>
        <div ref={messagesEndRef} />
      </ScrollArea>

      <div className="p-4 border-t border-border">
        <div className="flex gap-2">
          <Input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Share what's on your mind..."
            className="flex-1 bg-background/50 border-border focus:border-primary transition-colors"
          />
          <Button
            onClick={handleSendMessage}
            disabled={!inputValue.trim() || isTyping}
            size="icon"
            className="shrink-0 bg-primary hover:bg-primary/90 shadow-soft transition-all duration-300 hover:scale-105"
          >
            <Send className="w-4 h-4" />
          </Button>
        </div>
        <p className="text-xs text-muted-foreground mt-2 text-center">
          <Sparkles className="w-3 h-3 inline mr-1" />
          Your conversations are private and secure
        </p>
      </div>
    </Card>
  );
}