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
    default: 'border-l-gray-500',
    warning: 'border-l-warning',
    success: 'border-l-success',
    accent: 'border-l-blue-500',
  };

  return (
    <Card className={`p-3 border-l-4 ${variantStyles[variant]} transition-all hover:shadow-md`}>
      <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
        {title}
      </p>
      <div className="mt-1 flex items-baseline gap-1.5">
        <span className="text-xl font-bold text-foreground">
          {value}
        </span>
        {unit && (
          <span className="text-xs font-medium text-muted-foreground">
            {unit}
          </span>
        )}
      </div>
      {subtitle && (
        <p className="mt-0.5 text-xs text-muted-foreground">
          {subtitle}
        </p>
      )}
    </Card>
  );
}
