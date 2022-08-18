import { Outlet } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import "../../index.css";

const SharedLayout = () => {
  return (
    <div className="main">
      <Navbar />
      <Outlet />
    </div>
  );
};
export default SharedLayout;
