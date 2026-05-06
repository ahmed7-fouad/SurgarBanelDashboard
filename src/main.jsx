import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom';
import router from "/src/routes/router"
import "bootstrap/dist/css/bootstrap.min.css";
import {UserData} from "/src/contexts/AllDataContext";
import  AllProductsData  from "/src/services/api";
let data=JSON.parse(window.localStorage.getItem("userData")) ?? "";
import './index.css'


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UserData.Provider value={data}>
      <AllProductsData>
        <RouterProvider router={router} />
      </AllProductsData>
    </UserData.Provider>
  </StrictMode>,
);
