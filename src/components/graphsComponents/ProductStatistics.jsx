import { AllProducts } from "/src/contexts/AllProductsContext";
import { useContext } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const ProductStatistics = ({ isAnimationActive = true }) => {
  const allProducts = useContext(AllProducts);

  if (!allProducts || allProducts.length === 0) {
    return (
      <div style={{ textAlign: "center", color: "#999" }}>
        Loading Statistics...
      </div>
    );
  }

  const chartData = allProducts.slice(0, 10).map((product) => ({
    name: product.title,
    price: product.price,
    width: product.dimensions?.width || 0,
  }));

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div
          style={{
            backgroundColor: "#fff",
            padding: "10px",
            border: "1px solid #eee",
            borderRadius: "8px",
            boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
          }}
        >
          <p style={{ fontWeight: "bold", margin: 0 }}>{label}</p>
          <p style={{ color: "#0D6EFD", margin: "5px 0" }}>
            Price: ${payload[0].value}
          </p>
          <p style={{ color: "#999", fontSize: "11px" }}>Inventory Stats</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div style={{ width: "100%", height: "100%", padding: "21px" }}>
      <ResponsiveContainer width="100%" height="80%">
        <BarChart
          data={chartData}
          margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
        >
          <CartesianGrid
            strokeDasharray="3 3"
            vertical={false}
            stroke="#f0f0f0"
          />
          <XAxis
            dataKey="name"
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#999", fontSize: 10 }}
            interval={0}
            angle={-15}
            textAnchor="end"
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#999", fontSize: 12 }}
          />
          <Tooltip
            content={<CustomTooltip />}
            isAnimationActive={isAnimationActive}
          />
          <Legend iconType="circle" />
          <Bar
            dataKey="price"
            name="Product Price"
            fill="#0D6EFD"
            radius={[4, 4, 0, 0]}
            barSize={25}
            isAnimationActive={isAnimationActive}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ProductStatistics;
