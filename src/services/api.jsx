import axios from "axios";
import { AllProducts } from "/src/contexts/AllProductsContext";
import { useEffect , useState} from "react";
const baseUrl = "https://dummyjson.com";

export default function AllProductsData({ children }) {
  const [allProducts, setAllProducts] = useState([]);
  useEffect(() => {
    async function getData() {
      try {
        let token = window.localStorage.getItem("Token");
        if (token) {
          let response = await axios.get(`${baseUrl}/products`);
          setAllProducts(response.data.products);
        }
      } catch (error) {
        console.log(error.response.data.message);
      }
    }
    getData();
  }, []);
  return <AllProducts.Provider value={allProducts}>
    {children}
  </AllProducts.Provider>;
}
