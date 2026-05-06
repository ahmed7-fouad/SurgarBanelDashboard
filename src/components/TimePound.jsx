import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import DropDownMenu from "/src/components/DropDownMenu";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import dayjs from "dayjs";
export default function TimePound({
  title,
  selections,
  linkContent,
}) {
   let sel1, sel2, sel3 ;
  if(selections!==null){
     sel1=selections.sel1;
     sel2=selections.se2;
     sel3=selections.sel3;
  }
  const date = new Date().toLocaleDateString();
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <header className="mb-3">
        <section className="d-flex align-items-center justify-content-between mb-3">
          <h5 className="text-capitalize fw-semibold" style={{fontSize:"1.3rem"}}>{title}</h5>
          <section>
            {selections !== null ? (
              <DropDownMenu
                selection1={sel1}
                selection2={sel2}
                selection3={sel3}
              />
            ) : (
              ""
            )}
            {linkContent !== null ? <a href="#">{linkContent}</a> : ""}
          </section>
        </section>
        <section className="text-center">
          <DatePicker defaultValue={dayjs(date)} views={["year", "month", "day"]}/>
        </section>
      </header>
    </LocalizationProvider>
  );
}
