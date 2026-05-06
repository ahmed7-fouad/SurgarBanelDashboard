import Container from "react-bootstrap/Container";
import { Outlet } from "react-router-dom";
export default function MainLayout() {
  return (
    <>
      
        <Outlet />
      
    </>
  );
}
