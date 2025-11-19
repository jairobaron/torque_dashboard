import { Activity, Gauge, Zap, Scale } from 'lucide-react';
import TorqueChart from '@/components/TorqueChart';
import MetricCard from '@/components/MetricCard';
import BalancingTable from '@/components/BalancingTable';

const Index = () => {
  return (
    <div className="min-h-screen bg-background p-4">
      {/* Header */}
      <header className="mb-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-foreground">
              Análisis de Torque SRP
            </h1>
            <p className="text-sm text-muted-foreground mt-1">
              Unidad: <span className="font-semibold text-foreground">C-320D-256-120</span> | 
              Stroke: <span className="font-semibold">100.0 in</span> | 
              R: <span className="font-semibold">50.0 in</span> | 
              C: <span className="font-semibold">120.0 in</span>
            </p>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-success/10 border border-success/30 rounded-lg">
            <div className="h-2 w-2 rounded-full bg-success animate-pulse"></div>
            <span className="text-sm font-medium text-success">Sistema Operativo</span>
          </div>
        </div>
      </header>

      {/* Main Grid Layout */}
      <div className="grid grid-cols-12 gap-4">
        {/* Left Column - Metrics */}
        <div className="col-span-3 space-y-4">
          <MetricCard
            title="PPRL (máx Lpr)"
            value="11,998.9"
            unit="lbf"
            icon={Activity}
            variant="accent"
          />
          <MetricCard
            title="MPRL (mín Lpr)"
            value="6,599.8"
            unit="lbf"
            icon={Activity}
            variant="default"
          />
          <MetricCard
            title="CBE Ideal"
            value="9,299.4"
            unit="lbf"
            subtitle="Contrapeso ideal"
            icon={Scale}
            variant="success"
          />
          <MetricCard
            title="CBE Actual"
            value="9,460.4"
            unit="lbf"
            subtitle="Promedio Lpr"
            icon={Scale}
            variant="default"
          />
          <MetricCard
            title="ΔCBE"
            value="-161.0"
            unit="lbf"
            subtitle="Exceso de contrapeso"
            icon={Gauge}
            variant="warning"
          />
        </div>

        {/* Center Column - Chart */}
        <div className="col-span-6">
          <TorqueChart />
        </div>

        {/* Right Column - Additional Info */}
        <div className="col-span-3 space-y-4">
          <MetricCard
            title="Torque Pico Neto"
            value="217,751"
            unit="in-lbf"
            icon={Zap}
            variant="accent"
          />
          <MetricCard
            title="% Carga Reductor"
            value="68.05"
            unit="%"
            subtitle="Del rating máximo"
            icon={Gauge}
            variant="success"
          />
          <MetricCard
            title="Pérdida Desbalanceo"
            value="0.352"
            unit="kW"
            subtitle="SPM=8.3, ρ=0.30"
            icon={Activity}
            variant="warning"
          />
          <div className="pt-2">
            <BalancingTable />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
