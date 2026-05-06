import {useContext} from "react";
import {UserData} from "/src/contexts/AllDataContext.jsx"
export default function DashboardHeaderContent(){
    let userData = useContext(UserData);
    return (
      <section>
        <section>
          <h1 className="text-capitalize fw-bold">
            welcome back {userData.firstName} {userData.lastName}
          </h1>
          <p className="text-capitalize">
            you have <span style={{color:"var(--bs-primary)"}}>{userData.id} unread</span> notifications
          </p>
        </section>
      </section>
    );
}