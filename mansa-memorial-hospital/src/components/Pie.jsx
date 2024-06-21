import Stack from "@mui/material/Stack";
import { PieChart } from "@mui/x-charts/PieChart";

const data = [
  { label: "Consulting", value: 400 },
  { label: "Wound dressing", value: 300 },
];

export default function PieChartWithPaddingAngle() {
  const palette = ["#e3df63", "#004F9E"];
  return (
    <Stack direction="row">
      <PieChart
        colors={palette}
        slotProps={{
          legend: {
            direction: "column",
            position: { vertical: "middle", horizontal: "right" },
            padding: -13,
          },
        }}
        series={[
          {
            paddingAngle: 5,
            innerRadius: 30,
            outerRadius: 40,
            data,
          },
        ]}
        margin={{ right: 5, left: -3 }}
        width={100}
        height={100}
        legend={{ hidden: true }}
      />
    </Stack>
  );
}
