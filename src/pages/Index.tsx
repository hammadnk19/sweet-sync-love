import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, RefreshCw } from 'lucide-react';
import LoveForm from '@/components/LoveForm';
import LoveMeter from '@/components/LoveMeter';

const Index = () => {
  const [loveData, setLoveData] = useState<{
    name1: string;
    name2: string;
    percentage: number;
  } | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);
  const [showResult, setShowResult] = useState(false);

  const calculateLove = (name1: string, name2: string) => {
    setIsCalculating(true);
    setShowResult(false);
    
    // Simulate calculation delay
    setTimeout(() => {
      // Generate random percentage between 53 and 100
      const percentage = Math.floor(Math.random() * (100 - 53 + 1)) + 53;
      
      setLoveData({ name1, name2, percentage });
      setIsCalculating(false);
      setShowResult(true);
    }, 2000);
  };

  const resetCalculator = () => {
    setLoveData(null);
    setShowResult(false);
    setIsCalculating(false);
  };

  return (
    <div className="min-h-screen bg-soft px-4 py-8">
      <div className="container max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <Heart className="w-16 h-16 text-primary animate-float" fill="currentColor" />
              <div className="absolute inset-0 w-16 h-16 text-primary-glow animate-pulse-love opacity-50">
                <Heart className="w-full h-full" fill="currentColor" />
              </div>
            </div>
          </div>
          <h1 className="text-5xl font-bold bg-romantic bg-clip-text text-transparent mb-4">
            Love Meter
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Find out the love compatibility between two people with our magical love calculator
          </p>
        </div>

        {/* Main Content */}
        <div className="space-y-8">
          {!showResult ? (
            <LoveForm onCalculate={calculateLove} isCalculating={isCalculating} />
          ) : (
            <div className="space-y-8">
              {/* Results */}
              <Card className="w-full max-w-lg mx-auto shadow-romantic border-love-meter-bg/50 bg-card/90 backdrop-blur-sm">
                <CardContent className="pt-8">
                  <div className="text-center mb-6">
                    <h2 className="text-2xl font-semibold mb-2">
                      Love Between
                    </h2>
                    <div className="flex items-center justify-center gap-4 text-lg">
                      <span className="font-medium text-primary">{loveData?.name1}</span>
                      <Heart className="w-5 h-5 text-primary animate-pulse-love" fill="currentColor" />
                      <span className="font-medium text-primary">{loveData?.name2}</span>
                    </div>
                  </div>
                  
                  <LoveMeter 
                    percentage={loveData?.percentage || 0} 
                    isAnimating={showResult}
                  />
                </CardContent>
              </Card>

              {/* Reset Button */}
              <div className="text-center">
                <Button
                  onClick={resetCalculator}
                  variant="outline"
                  className="bg-background/80 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  <RefreshCw className="w-4 h-4 mr-2" />
                  Try Another Couple
                </Button>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="text-center mt-16 text-muted-foreground">
          <p className="text-sm">
            Made with <Heart className="w-4 h-4 inline text-primary" fill="currentColor" /> for love
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;