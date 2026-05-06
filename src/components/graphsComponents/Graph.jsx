import Dropdown from "react-bootstrap/Dropdown";
import DropDownMenu from "/src/components/DropDownMenu";
import TransicationActivity from "/src/components/graphsComponents/TransicationActivity.jsx";
import OrderByTime from "/src/components/graphsComponents/OrderByTime";
import SalesPerformance from "/src/components/graphsComponents/SalesPerformance";
import ProductStatistics from "/src/components/graphsComponents/ProductStatistics";
export default function Graph({title,type,selections,extraComponent}){
let {one,two,three}= selections;
    function setGraph(type){
        if(type ==="tr"){
            return <TransicationActivity/>
        }else if(type === "or"){
          return <OrderByTime/>
        }else if(type === "sp"){
          return <SalesPerformance/>
        }else if (type == "ps"){
          return <ProductStatistics />
        }
    }

    return (
      <>
        <section
          className="fs-5 rounded-5"
          style={{ background: "var(--light)", height: "calc(50% - 0.7rem)"}}
        >
          <section className="d-flex justify-content-between align-items-center p-4 pb-0">
            <h3 className="text-capitalize">{title}</h3>
            {extraComponent !== null ? <span>meka</span> : ""}
            <DropDownMenu
              selection1={one}
              selection2={two}
              selection3={three}
            />
          </section>
          {setGraph(type)}
        </section>
      </>
    );
}