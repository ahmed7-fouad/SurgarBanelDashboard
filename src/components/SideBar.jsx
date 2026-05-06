import WidgetsIcon from "@mui/icons-material/Widgets";
import SsidChartIcon from "@mui/icons-material/SsidChart";
import LayersIcon from "@mui/icons-material/Layers";
import PeopleIcon from "@mui/icons-material/People";
import NotificationsIcon from "@mui/icons-material/Notifications";
import FolderSharedIcon from "@mui/icons-material/FolderShared";
import ContactsIcon from "@mui/icons-material/Contacts";
import RecentActorsIcon from "@mui/icons-material/RecentActors";
import ViewCompactIcon from "@mui/icons-material/ViewCompact";
import SettingsIcon from "@mui/icons-material/Settings";
import { Link } from "react-router-dom";
import { useState } from "react";
export default function SideBar() {

const allSideBarIcons = [
  { id: 1, icon: <WidgetsIcon className="dasboardIcon" /> },
  { id: 2, icon: <SsidChartIcon className="dasboardIcon" /> },
  { id: 3, icon: <LayersIcon className="dasboardIcon" /> },
  { id: 4, icon: <PeopleIcon className="dasboardIcon" /> },
  { id: 5, icon: <NotificationsIcon className="dasboardIcon" /> },
  { id: 6, icon: <FolderSharedIcon className="dasboardIcon" /> },
  { id: 7, icon: <ContactsIcon className="dasboardIcon" /> },
  { id: 8, icon: <RecentActorsIcon className="dasboardIcon" /> },
  { id: 9, icon: <ViewCompactIcon className="dasboardIcon" /> },
  { id: 10, icon: <SettingsIcon className="dasboardIcon" /> },
];


const [activeId , setActiveId] = useState(1);
function handleSideBarLinkState(id){
    setActiveId(id);
}
// Display ALL Icons 
function displayALlIcons(){
   let allIcons= allSideBarIcons.map(icon=>{
        return (
          <Link
            key={icon.id}
            className={
              activeId === icon.id ? "link active" : "link"
            }
            onClick={() => {
              handleSideBarLinkState(icon.id);
            }}
          >
            {icon.icon}
          </Link>
        ); 
    })
    return allIcons;
}
return (
  <>
    
      <section
        className="sideBar-icons-parent position-fixed left-0  d-flex flex-column justify-content-start align-items-center gap-2 pt-5 "
        style={{ width: "5rem", height: "calc(100vh - 64px)", top: "65px" }}
      >
        {displayALlIcons()}
    </section>
  </>
);
}
