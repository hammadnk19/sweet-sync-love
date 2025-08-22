import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Heart, Sparkles } from 'lucide-react';

interface LoveFormProps {
  onCalculate: (name1: string, name2: string) => void;
  isCalculating: boolean;
}

const LoveForm = ({ onCalculate, isCalculating }: LoveFormProps) => {
  const [name1, setName1] = useState('');
  const [name2, setName2] = useState('');
  const [adClicked, setAdClicked] = useState(false);  // Track first click

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name1.trim() || !name2.trim()) return;

    if (!adClicked) {
      // First submit → open ad
      window.open(
        "https://www.profitableratecpm.com/wazur5m9zw?key=135386da696a82a13664de1a035cfdab",
        "_blank"
      );
      setAdClicked(true);
      return; // Don't calculate yet
    }

    // Second submit → run the calculator
    onCalculate(name1.trim(), name2.trim());
  };

  return (
    <Card className="w-full max-w-md mx-auto shadow-romantic border-love-meter-bg/50 bg-card/80 backdrop-blur-sm">
      <CardHeader className="text-center">
        <div className="flex justify-center mb-4">
          <div className="relative">
            <Heart className="w-12 h-12 text-primary animate-pulse-love" fill="currentColor" />
            <Sparkles className="w-4 h-4 text-primary-glow absolute -top-1 -right-1 animate-float" />
          </div>
        </div>
        <CardTitle className="text-2xl bg-romantic bg-clip-text text-transparent">
          Love Calculator
        </CardTitle>
        <p className="text-muted-foreground">
          Discover the love percentage between two hearts
        </p>
      </CardHeader>
      
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name1" className="text-sm font-medium">
                Your Name
              </Label>
              <Input
                id="name1"
                type="text"
                placeholder="Enter your name"
                value={name1}
                onChange={(e) => setName1(e.target.value)}
                className="bg-background/50 border-love-meter-bg focus:border-primary transition-colors"
                disabled={isCalculating}
              />
            </div>
            
            <div className="flex justify-center">
              <Heart className="w-6 h-6 text-primary/60" fill="currentColor" />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="name2" className="text-sm font-medium">
                Partner's Name
              </Label>
              <Input
                id="name2"
                type="text"
                placeholder="Enter partner's name"
                value={name2}
                onChange={(e) => setName2(e.target.value)}
                className="bg-background/50 border-love-meter-bg focus:border-primary transition-colors"
                disabled={isCalculating}
              />
            </div>
          </div>
          
          <Button
            type="submit"
            className="w-full bg-romantic hover:shadow-glow transition-all duration-300 transform hover:scale-105"
            disabled={!name1.trim() || !name2.trim() || isCalculating}
          >
            {isCalculating ? (
              <>
                <Heart className="w-4 h-4 mr-2 animate-pulse-love" fill="currentColor" />
                Calculating Love...
              </>
            ) : (
              <>
                <Sparkles className="w-4 h-4 mr-2" />
                {adClicked ? "Continue" : "Calculate Love"}
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default LoveForm;
