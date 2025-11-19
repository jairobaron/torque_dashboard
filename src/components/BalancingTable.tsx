import { Card } from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

const balancingData = [
  { radius: 18, lbPerSide: -223.7 },
  { radius: 20, lbPerSide: -201.3 },
  { radius: 22, lbPerSide: -183.0 },
  { radius: 24, lbPerSide: -167.8 },
  { radius: 26, lbPerSide: -154.9 },
  { radius: 28, lbPerSide: -143.8 },
  { radius: 30, lbPerSide: -134.2 },
];

export default function BalancingTable() {
  return (
    <Card className="p-4">
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-foreground">Balanceo (CBE)</h3>
        <p className="text-sm text-muted-foreground mt-1">
          ΔCBE {'<'} 0 ⇒ exceso de contrapeso (quitar)
        </p>
        <p className="text-xs text-muted-foreground mt-1">
          Conversión: ΔW<sub>lado</sub> = (ΔCBE · R) / (2 · r)
        </p>
      </div>
      
      <div className="overflow-hidden rounded-lg border border-border">
        <Table>
          <TableHeader>
            <TableRow className="bg-muted/50">
              <TableHead className="text-center font-semibold">r (in)</TableHead>
              <TableHead className="text-center font-semibold">lb por lado</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {balancingData.map((row) => (
              <TableRow key={row.radius} className="hover:bg-muted/30">
                <TableCell className="text-center font-medium">
                  {row.radius}
                </TableCell>
                <TableCell className={`text-center font-mono font-medium ${
                  row.lbPerSide < 0 ? 'text-warning' : 'text-success'
                }`}>
                  {row.lbPerSide.toFixed(1)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      
      <div className="mt-3 p-3 bg-warning/10 border border-warning/30 rounded-lg">
        <p className="text-xs font-medium text-warning-foreground">
          ⚠️ Valores negativos indican exceso de contrapeso
        </p>
      </div>
    </Card>
  );
}
