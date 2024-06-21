import {
  ResponsiveContainer,
  Pie,
  PieChart,
  Cell,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  { label: "Consulting", value: 400, color: "#004F9E" },
  { label: "Wound dressing", value: 300, color: "#F78509" },
];

const Pie2 = () => {
  return (
    <ResponsiveContainer width="100%" height={150}>
      <PieChart>
        <Pie
          data={data}
          nameKey="label"
          dataKey="value"
          cx="40%"
          cy="50%"
          innerRadius={30}
          outerRadius={40}
          fill="#4f46e5"
          paddingAngle={3}
          startAngle={180}
          endAngle={-180}
        >
          {data.map((entry) => (
            <Cell key={entry.label} fill={entry.color} stroke={entry.color} />
          ))}
        </Pie>
        <Tooltip />
        <Legend
          // verticalAlign='bottom'
          // align='center'
          verticalAlign="middle"
          align="right"
          width="50%"
          layout="vertical"
          iconSize={10}
          iconType="circle"
          fontSize="5px"
        />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default Pie2;
