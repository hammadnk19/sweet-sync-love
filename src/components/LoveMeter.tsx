import { useEffect, useState } from 'react';
import { Heart } from 'lucide-react';

interface LoveMeterProps {
  percentage: number;
  isAnimating: boolean;
}

const LoveMeter = ({ percentage, isAnimating }: LoveMeterProps) => {
  const [animatedPercentage, setAnimatedPercentage] = useState(0);

  useEffect(() => {
    if (isAnimating) {
      const timer = setTimeout(() => {
        setAnimatedPercentage(percentage);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [percentage, isAnimating]);

  const getLoveMessage = (percent: number) => {
    if (percent >= 95) return "Perfect Match! 💕";
    if (percent >= 85) return "True Love! ❤️";
    if (percent >= 75) return "Great Chemistry! 💗";
    if (percent >= 65) return "Good Compatibility! 💖";
    return "There's Potential! 💓";
  };

  return (
    <div className="w-full max-w-md mx-auto">
      {/* Percentage Display */}
      <div className="text-center mb-6">
        <div className="text-6xl font-bold bg-romantic bg-clip-text text-transparent animate-pulse-love">
          {animatedPercentage}%
        </div>
        <p className="text-lg text-foreground/80 mt-2">
          {getLoveMessage(animatedPercentage)}
        </p>
      </div>

      {/* Love Meter */}
      <div className="relative mb-6">
        {/* Meter Background */}
        <div className="w-full h-8 bg-love-meter-bg rounded-full overflow-hidden shadow-inner">
          {/* Meter Fill */}
          <div
            className="h-full bg-romantic rounded-full transition-all duration-2000 ease-out shadow-glow"
            style={{ 
              width: isAnimating ? `${animatedPercentage}%` : '0%',
              '--meter-width': `${animatedPercentage}%`
            } as React.CSSProperties}
          />
        </div>
        
        {/* Floating Hearts */}
        <div className="absolute -top-2 left-0 right-0 flex justify-between pointer-events-none">
          {[...Array(5)].map((_, i) => (
            <Heart
              key={i}
              className={`w-4 h-4 text-primary animate-float ${
                animatedPercentage > (i * 20) ? 'opacity-100' : 'opacity-30'
              }`}
              style={{ animationDelay: `${i * 0.2}s` }}
              fill="currentColor"
            />
          ))}
        </div>
      </div>

      {/* Meter Labels */}
      <div className="flex justify-between text-xs text-muted-foreground">
        <span>53%</span>
        <span>Perfect!</span>
        <span>100%</span>
      </div>
    </div>
  );
};

export default LoveMeter;