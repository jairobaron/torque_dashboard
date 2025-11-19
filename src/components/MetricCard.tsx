import { Card } from '@/components/ui/card';
import { LucideIcon } from 'lucide-react';

interface MetricCardProps {
  title: string;
  value: string;
  unit?: string;
  subtitle?: string;
  icon?: LucideIcon;
  variant?: 'default' | 'warning' | 'success' | 'accent';
}

export default function MetricCard({ 
  title, 
  value, 
  unit, 
  subtitle, 
  icon: Icon,
  variant = 'default' 
}: MetricCardProps) {
  const variantStyles = {
    default: 'border-l-primary',
    warning: 'border-l-warning',
    success: 'border-l-success',
    accent: 'border-l-accent',
  };

  return (
    <Card className={`p-4 border-l-4 ${variantStyles[variant]} transition-all hover:shadow-md`}>
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
            {title}
          </p>
          <div className="mt-2 flex items-baseline gap-2">
            <span className="text-2xl font-bold text-foreground">
              {value}
            </span>
            {unit && (
              <span className="text-sm font-medium text-muted-foreground">
                {unit}
              </span>
            )}
          </div>
          {subtitle && (
            <p className="mt-1 text-xs text-muted-foreground">
              {subtitle}
            </p>
          )}
        </div>
        {Icon && (
          <div className={`p-2 rounded-lg ${
            variant === 'warning' ? 'bg-warning/10' :
            variant === 'success' ? 'bg-success/10' :
            variant === 'accent' ? 'bg-accent/10' :
            'bg-primary/10'
          }`}>
            <Icon className={`h-5 w-5 ${
              variant === 'warning' ? 'text-warning' :
              variant === 'success' ? 'text-success' :
              variant === 'accent' ? 'text-accent' :
              'text-primary'
            }`} />
          </div>
        )}
      </div>
    </Card>
  );
}
