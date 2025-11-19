
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
        <div className="col-span-9">
          <TorqueChart />
        </div>

        {/* Right Column - Balancing Table */}
        <div className="col-span-3">
          <BalancingTable />
        </div>

        {/* Bottom Row - Metric Cards (smaller, no icons) */}
        <div className="col-span-12">
          <div className="grid grid-cols-7 gap-3">
            <MetricCard
              title="PPRL (máx Lpr)"
              value="11,998.9"
              unit="lbf"
              variant="accent"
            />
            <MetricCard
              title="MPRL (mín Lpr)"
              value="6,599.8"
              unit="lbf"
              variant="default"
            />
            <MetricCard
              title="CBE Ideal"
              value="9,299.4"
              unit="lbf"
              subtitle="Contrapeso ideal"
              variant="success"
            />
            <MetricCard
              title="CBE Actual"
              value="9,460.4"
              unit="lbf"
              subtitle="Promedio Lpr"
              variant="default"
            />
            <MetricCard
              title="ΔCBE"
              value="-161.0"
              unit="lbf"
              subtitle="Exceso de contrapeso"
              variant="warning"
            />
            <MetricCard
              title="Torque Pico Neto"
              value="217,751"
              unit="in-lbf"
              variant="accent"
            />
            <MetricCard
              title="% Carga Reductor"
              value="68.05"
              unit="%"
              subtitle="Del rating máximo"
              variant="success"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
