import {useContext} from "react";
import { AllProducts } from "/src/contexts/AllProductsContext";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import Button from "react-bootstrap/Button";

export default function AllAnalyticsInfo(){
    const allProducts=useContext(AllProducts);
    function getALlProducts(){
        let products=allProducts.map(product=>{
            return (
              <section className="d-flex align-items-center justify-content-between p-1 mb-1">
                <section>
                  <h5 className="fs-5 m-0 fw-semibold text-capitalize">
                    {product.title}
                  </h5>
                  <p className="text-secondary">{product.stock}%</p>
                </section>
                <p className="text-capitalize fw-semibold">{product.price}</p>
              </section>
            );
        })
        return products;   
    }
    return (
      <section className="parent pt-3">
        {getALlProducts()}
        <Button
          className="w-100 text-capitalize fw-semibold text-center border-1 rounded-bottom-4 rounded-top-0 border-secondary  position-absolute bottom-0"
          style={{ backgroundColor: "var(--light)", color: "var(--dark)" ,left:"0"} }
        >
          learn more
          <ArrowRightAltIcon className="ms-1"/>
        </Button>
      </section>
    );
}