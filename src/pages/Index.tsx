
import TorqueChart from '@/components/TorqueChart';
import MetricCard from '@/components/MetricCard';
import BalancingTable from '@/components/BalancingTable';

const Index = () => {
  return (
    <div className="min-h-screen bg-background p-4">
      {/* Header */}
      <header className="mb-6 text-center">
        <h1 className="text-2xl font-bold text-foreground">
          Análisis de Torque
        </h1>
      </header>

      {/* Main Grid Layout */}
      <div className="grid grid-cols-12 gap-4">
        {/* Chart - Takes most space */}
        <div className="col-span-10 p-2">
          <TorqueChart />
          {/* Bottom Row - Metric Cards (smaller, no icons) */}
        <div className="col-span-12 p-2">
          <div className="grid grid-cols-7 gap-3">
            <MetricCard
              title="PPRL (máx Lpr)"
              value="11,998.9"
              unit="lbf"
              subtitle='Carga Máxima'
              variant="default"
            />
            <MetricCard
              title="MPRL (mín Lpr)"
              value="6,599.8"
              unit="lbf"
              subtitle='Carga Mínima'
              variant="default"
            />
            <MetricCard
              title="CBE Ideal"
              value="9,299.4"
              unit="lbf"
              subtitle="Contrapeso ideal"
              variant="warning"
            />
            <MetricCard
              title="CBE Actual"
              value="9,461.1"
              unit="lbf"
              subtitle="Promedio Lpr"
              variant="warning"
            />
            <MetricCard
              title="ΔCBE"
              value="-161.7"
              unit="lbf"
              subtitle="Exceso de contrapeso"
              variant="warning"
            />
            <MetricCard
              title="Torque Pico"
              value="197,907"
              unit="in-lbf"
              subtitle='Capacidad Nominal: 320,000 in-lbf'
              variant="success"
            />
            <MetricCard
              title="% Carga"
              value="61.85"
              unit="%"
              subtitle="Del rating máximo"
              variant="accent"
            />
          </div>
        </div>
        </div>

        {/* Right Column - Balancing Table */}
        <div className="col-span-2">
          <BalancingTable />
        </div>
      </div>
    </div>
  );
};

export default Index;
