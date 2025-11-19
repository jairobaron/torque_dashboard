import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ReferenceLine } from 'recharts';
import { Card } from '@/components/ui/card';

// Generar datos simulados basados en la imagen
const generateTorqueData = () => {
  const data = [];
  for (let angle = 0; angle <= 360; angle += 2) {
    const rad = (angle * Math.PI) / 180;
    
    // Torque de carga (naranja) - patrón sinusoidal con ruido
    const loadTorque = 320000 + 280000 * Math.sin(rad + Math.PI / 6) + (Math.random() - 0.5) * 40000;
    
    // Torque de contrapeso (azul) - patrón sinusoidal suave
    const counterTorque = 320000 * Math.sin(rad + Math.PI);
    
    // Torque neto (verde) - diferencia con variación
    const netTorque = (loadTorque - counterTorque) * 0.3 + (Math.random() - 0.5) * 30000;
    
    data.push({
      angle,
      loadTorque: Math.round(loadTorque),
      counterTorque: Math.round(counterTorque),
      netTorque: Math.round(netTorque),
    });
  }
  return data;
};

const torqueData = generateTorqueData();

export default function TorqueChart() {
  return (
    <Card className="p-4">
      <div className="mb-4">
        <h2 className="text-lg font-semibold text-foreground">
          Análisis de Torque en el Reductor
        </h2>
        <p className="text-sm text-muted-foreground">C-320D-256-120</p>
      </div>
      
      <ResponsiveContainer width="100%" height={380}>
        <LineChart data={torqueData} margin={{ top: 5, right: 20, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" opacity={0.3} />
          <XAxis 
            dataKey="angle" 
            label={{ value: 'Ángulo de la Manivela (θ) [grados]', position: 'insideBottom', offset: -5 }}
            tick={{ fill: 'hsl(var(--muted-foreground))' }}
            ticks={[0, 50, 100, 150, 200, 250, 300, 350]}
          />
          <YAxis 
            label={{ value: 'Torque [in-lbf]', angle: -90, position: 'insideLeft' }}
            tick={{ fill: 'hsl(var(--muted-foreground))' }}
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
            stroke="hsl(var(--warning))" 
            strokeDasharray="8 4" 
            strokeWidth={2}
          />
          <ReferenceLine 
            y={-320000} 
            stroke="hsl(var(--warning))" 
            strokeDasharray="8 4" 
            strokeWidth={2}
          />
          
          {/* Líneas de torque */}
          <Line 
            type="monotone" 
            dataKey="loadTorque" 
            stroke="hsl(var(--accent))" 
            strokeWidth={1.5}
            dot={false}
            name="Torque de Carga"
          />
          <Line 
            type="monotone" 
            dataKey="counterTorque" 
            stroke="hsl(195 85% 55%)" 
            strokeWidth={2}
            strokeDasharray="5 5"
            dot={false}
            name="Torque CBE Ideal"
          />
          <Line 
            type="monotone" 
            dataKey="netTorque" 
            stroke="hsl(var(--success))" 
            strokeWidth={1.5}
            dot={false}
            name="Torque Neto"
          />
        </LineChart>
      </ResponsiveContainer>
    </Card>
  );
}
