import IncomeState from "/src/components/IncomeState.jsx";
import ProductList from "/src/components/ProductList";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
// import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import SearchIcon from "@mui/icons-material/Search";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import RecyclingIcon from "@mui/icons-material/Recycling";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";

export default function ProductsBanner({itemsNum,icon , state , percentage}) {

  return (
    // Top Banner Part
    <section
      className="rounded-4 p-4 h-100"
      style={{ backgroundColor: "var(--light)"}}
    >
      <section className="d-flex align-items-center justify-content-between">
        <section className="d-flex align-items-center gap-3">
          <h3>
            {itemsNum} <span className="text-secondary">item</span>
          </h3>
          <IncomeState icon={icon} percentage={percentage} state="su" />
        </section>
        <section className="d-flex align-items-center gap-3">
          <a href="">see more</a>
          <SearchIcon />
        </section>
      </section>

      <section className="d-flex align-items-center justify-content-between mt-3">
        <FormControl variant="standard">
          <InputLabel htmlFor="input-with-icon-adornment">
            search for item
          </InputLabel>
          <Input
            id="input-with-icon-adornment"
            startAdornment={
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            }
          />
        </FormControl>
        <RecyclingIcon />
      </section>

      {/* Products List */}
      <section className="mt-3 d-flex" style={{padding:"20px" , height:"calc(100% - 130px"}}>
        <ProductList />
      </section>
      {/* === Products List === */}
    </section>

    //===// Top Banner Part//===
  );
}
