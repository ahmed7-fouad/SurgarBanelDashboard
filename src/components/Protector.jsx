import { Navigate } from "react-router-dom";
export default function Protector({ children }) {
  let token = window.localStorage.getItem("Token");


  if (!token) {
    return <Navigate to="/login" replace />;;
  }
  return children;
}
