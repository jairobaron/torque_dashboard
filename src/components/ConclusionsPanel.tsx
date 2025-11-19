import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { AlertCircle, CheckCircle2, Info } from 'lucide-react';

export default function ConclusionsPanel() {
  return (
    <Card className="p-4">
      <div className="flex items-center gap-2 mb-4">
        <Info className="h-5 w-5 text-primary" />
        <h3 className="text-lg font-semibold text-foreground">Conclusiones</h3>
      </div>
      
      <div className="space-y-3">
        <div className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg">
          <CheckCircle2 className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
          <div className="flex-1">
            <p className="text-sm font-medium text-foreground">Balance de Contrapeso</p>
            <p className="text-xs text-muted-foreground mt-1">
              CBE ideal: <span className="font-mono font-semibold">9,299.4 lbf</span> | 
              CBE actual: <span className="font-mono font-semibold">9,460.4 lbf</span> | 
              ΔCBE: <span className="font-mono font-semibold text-warning">-161.0 lbf</span>
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3 p-3 bg-warning/10 border border-warning/30 rounded-lg">
          <AlertCircle className="h-5 w-5 text-warning mt-0.5 flex-shrink-0" />
          <div className="flex-1">
            <p className="text-sm font-medium text-foreground">Pérdida por Desbalanceo</p>
            <p className="text-xs text-muted-foreground mt-1">
              Pérdida estimada: <span className="font-mono font-semibold text-warning">0.352 kW</span>
              {' '}(SPM=8.3, ρ=0.30)
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg">
          <CheckCircle2 className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
          <div className="flex-1">
            <p className="text-sm font-medium text-foreground">Carga del Reductor</p>
            <p className="text-xs text-muted-foreground mt-1">
              Torque pico neto: <span className="font-mono font-semibold">217,751 in-lbf</span>
              <Badge variant="outline" className="ml-2 text-xs bg-success/10 text-success border-success/30">
                68.05% del rating
              </Badge>
            </p>
          </div>
        </div>
      </div>

      <div className="mt-4 pt-4 border-t border-border">
        <p className="text-xs text-muted-foreground">
          El sistema opera dentro de parámetros aceptables. Se recomienda ajustar el contrapeso 
          para reducir pérdidas por desbalanceo.
        </p>
      </div>
    </Card>
  );
}
