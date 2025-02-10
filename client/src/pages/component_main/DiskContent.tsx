import { Box, Typography } from "@mui/material";
import { PieChart, Pie, Cell } from "recharts";

const COLORS = ["#d5c7aa", "#00C49F"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
}: any) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export default function DiskContent() {
  const data = [
    { name: "free", value: 600 },
    { name: "fulled", value: 400 },
  ]
    

  return (
    <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", textAlign: "center",  width: "50%", padding: 2 }}>
      <Typography variant="h5">Free space C:</Typography>
      
      <Box sx={{ height: "200px", display: "flex", justifyContent: "center", alignItems: "center" }}>
        <PieChart width={200} height={200}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((index: any) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </Box>

      {/* Дополнительные блоки */}
      <Box sx={{ marginTop: 2 }}>
        <Box sx={{display: 'flex'}}><Box sx={{height: '10px', width: '10px', backgroundColor:"#d5c7aa", marginTop: 0.8, marginLeft: 20, marginRight: 0.5}}></Box><Typography>Used space</Typography></Box>
        <Box sx={{display: 'flex'}}><Box sx={{height: '10px', width: '10px', backgroundColor:"#00C49F", marginTop: 0.8, marginLeft: 20, marginRight: 0.5}}></Box><Typography>Free space</Typography></Box>
      </Box>
    </Box>
  );
}
