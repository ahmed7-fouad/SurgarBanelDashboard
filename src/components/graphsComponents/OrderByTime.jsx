import { Pie, PieChart, Tooltip, ResponsiveContainer, Cell } from "recharts";
import {AllProducts} from "/src/contexts/AllProductsContext";
import { useContext } from "react";


//   { name: "Group A", value: 400 },
//   { name: "Group B", value: 300 },
//   { name: "Group C", value: 300 },
//   { name: "Group D", value: 200 },
// ];

// const data02 = [
//   { name: "A1", value: 100 },
//   { name: "A2", value: 300 },
//   { name: "B1", value: 100 },
//   { name: "B2", value: 80 },
//   { name: "B3", value: 40 },
//   { name: "B4", value: 30 },
//   { name: "B5", value: 50 },
//   { name: "C1", value: 100 },
//   { name: "C2", value: 200 },
//   { name: "D1", value: 150 },
//   { name: "D2", value: 50 },
// ];


const COLORS = ["#0D6EFD", "#6610f2", "#6f42c1", "#d63384"];

export default function OrderByTime({ isAnimationActive = true }) {
  let allProducts=useContext(AllProducts);
  let firstPatch=allProducts.slice(0,10);
  let secondPatch=allProducts.slice(11,20);

   const data01=firstPatch.map(product=>{
    return(
      { category: product.category, price: product.price }
    );
  })
  const data02=secondPatch.map(product=>{
    return(
      { category: product.category, price: product.price }
    );
  })
  
  return (
    <div style={{ width: "100%", height: "100%",padding:"21px" }}>
      <ResponsiveContainer width="100%" height="80%">
        <PieChart>
          <Pie
            data={data01}
            dataKey="price"
            cx="50%"
            cy="50%"
            outerRadius={60}
            fill="#8884d8"
            isAnimationActive={isAnimationActive}
          >
            {data01.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Pie
            data={data02}
            dataKey="price"
            cx="50%"
            cy="50%"
            innerRadius={70}
            outerRadius={90}
            fill="#82ca9d"
            label
            isAnimationActive={isAnimationActive}
          />
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
