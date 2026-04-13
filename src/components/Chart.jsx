"use client";

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const COLORS = ["#7C3AED", "#1F3D37", "#2F9E5B", "#F59E0B", "#EF4444"];

const DonutChart = ({ data }) => {
  const groupedData = Object.values(
    data.reduce((acc, item) => {
      if (!acc[item.type]) {
        acc[item.type] = { type: item.type, value: 0 };
      }
      acc[item.type].value += 1; 
      return acc;
    }, {})
  );

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white shadow-lg rounded-lg px-3 py-2 border">
          <p className="text-sm font-medium text-gray-700">
            {payload[0].name}
          </p>
          <p className="text-xs text-gray-500">
            Count: {payload[0].value}
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="flex flex-col items-center justify-center w-full px-4">
      
      <div className="w-full max-w-[350px] aspect-square">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={groupedData}
              dataKey="value"
              nameKey="type"
              cx="50%"
              cy="50%"
              innerRadius="60%"
              outerRadius="80%"
              paddingAngle={6}
              stroke="none"
            >
              {groupedData.map((entry, index) => (
                <Cell key={index} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>

            <Tooltip content={<CustomTooltip />} />
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="flex flex-wrap justify-center gap-4 mt-4">
        {groupedData.map((item, index) => (
          <div key={item.type} className="flex items-center gap-2">
            <span
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: COLORS[index % COLORS.length] }}
            ></span>
            <p className="text-sm text-gray-600">{item.type}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DonutChart;