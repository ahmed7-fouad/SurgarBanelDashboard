import { AllProducts } from "/src/contexts/AllProductsContext";
import { useContext } from "react";
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Scatter,
} from "recharts";

// #region Sample data


// #endregion
const SalesPerformance = () => {
  const allProducts=useContext(AllProducts);
  const data=allProducts.map((product)=>{
    return {
      name: product.title,
      price: name.price,
      depth: product.dimensions.depth,
      height: product.dimensions.height,
      width: product.dimensions.width,
    };
  })
  return (
    <ComposedChart
      style={{
        width: "90%",
        height: "80%",
        maxWidth: "700px",
        maxHeight: "70vh",
        padding: "21px",
        aspectRatio: 1.618,
      }}
      responsive
      data={data}
      margin={{
        top: 20,
        right: 0,
        bottom: 0,
        left: 0,
      }}
    >
      <CartesianGrid stroke="#f5f5f5" />
      <XAxis dataKey="name" scale="band" />
      <YAxis width="auto" niceTicks="snap125" />
      <Tooltip />
      <Legend />
      <Area type="monotone" dataKey="depth" fill="#8884d8" stroke="#8884d8" />
      <Bar dataKey="discount" barSize={20} fill="#413ea0" />
      <Line type="monotone" dataKey="price" stroke="#ff7300" />
      <Scatter dataKey="height" fill="red" />
    </ComposedChart>
  );
};

export default SalesPerformance;
