import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Dashboard from "../pages/Dashboard"
import Login from "../pages/Login"
import List from "../pages/List"
import Protector from "../components/Protector"
import Details from "../pages/Details"
import ErrorBanner from "../pages/ErrorBanner";
const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: (
      <Protector>
        <MainLayout />
      </Protector>
    ),
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/list",
        element: <List />,
      },
      {
        path: "/details",
        element: <Details />,
      },
      {
        path: "*",
        element: <ErrorBanner />,
      },
    ],
  },
]);

export default router;