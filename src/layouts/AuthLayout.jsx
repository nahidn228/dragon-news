import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

const AuthLayout = () => {
  return (
    <div className="font-Poppins bg-[#F3F3F3]">
      <header className="w-11/12 mx-auto py-3">
        <NavBar></NavBar>
      </header>
      <Outlet></Outlet>
    </div>
  );
};

export default AuthLayout;
