import Dropdown from "react-bootstrap/Dropdown";
import {useState} from "react";
export default function DropDownMenu({selection1,selection2,selection3}) {
    const [choice , setChoice] = useState(selection1);
  return (
    <Dropdown>
      <Dropdown.Toggle variant="secondary" id="dropdown-basic" className="rounded-4 text-capitalize">
        {choice}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1" onClick={(e)=>{setChoice(e.target.textContent)}}>{selection1}</Dropdown.Item>
        <Dropdown.Item href="#/action-2" onClick={(e)=>{setChoice(e.target.textContent)}}>{selection2}</Dropdown.Item>
        <Dropdown.Item href="#/action-3" onClick={(e)=>{setChoice(e.target.textContent)}}>{selection3}</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}
