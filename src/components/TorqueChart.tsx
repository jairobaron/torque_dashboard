import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ReferenceLine } from 'recharts';
import { Card } from '@/components/ui/card';
import { torqueData } from '@/data/MockData';

export default function TorqueChart() {
  return (
    <Card className="p-4">
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={torqueData} margin={{ top: 5, right: 20, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" opacity={0.3} />
          <XAxis
            dataKey="angle"
            type="number"
            domain={[0, 360]}
            label={{ value: 'Ángulo de la Manivela (θ) [grados]', position: 'insideBottom', offset: -6 }}
            tick={{ fill: 'hsl(var(--muted-foreground))' }}
            ticks={[0, 50, 100, 150, 200, 250, 300, 350]}
          />
          <YAxis 
            label={{ value: 'Torque [in-lbf]', angle: -90, position: 'insideLeft', offset: -1 }}
            tick={{ fill: 'hsl(var(--muted-foreground))' }}
            ticks={[-650000, -600000, -400000, -200000, 0, 200000, 400000, 600000, 650000]}
            tickFormatter={(value) => `${(value / 1000).toFixed(0)}k`}
          />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: 'hsl(var(--card))', 
              border: '1px solid hsl(var(--border))',
              borderRadius: '6px'
            }}
            formatter={(value: number) => [`${value.toLocaleString()} in-lbf`, '']}
            labelFormatter={(label) => `Ángulo: ${label}°`}
          />
          <Legend 
            wrapperStyle={{ paddingTop: '10px' }}
            iconType="line"
          />
          
          {/* Líneas de referencia para límites */}
          <ReferenceLine 
            y={320000} 
            stroke="hsl(224, 67%, 49%)" 
            strokeDasharray="8 4" 
            strokeWidth={2}
          />
          <ReferenceLine 
            y={-320000} 
            stroke="hsl(224, 67%, 49%)" 
            strokeDasharray="8 4" 
            strokeWidth={2}
          />
          
          {/* Líneas de torque */}
          <Line 
            type="monotone" 
            dataKey="loadTorque" 
            stroke="hsla(224, 87%, 63%, 1.00)" 
            strokeWidth={1.5}
            strokeDasharray="3 3"
            dot={false}
            name="Torque de Carga"
          />
          <Line 
            type="monotone" 
            dataKey="counterTorque" 
            stroke="hsla(36, 94%, 56%, 1.00)" 
            strokeWidth={3}
            strokeDasharray="8 4"
            dot={false}
            name="Torque del Contrapeso"
          />
          <Line 
            type="monotone" 
            dataKey="netTorque" 
            stroke="hsl(var(--success))" 
            strokeWidth={3}
            dot={false}
            name="Torque Neto"
          />
        </LineChart>
      </ResponsiveContainer>
    </Card>
  );
}
