import { Outlet } from "react-router";
import Navbar from "../Common/Navbar";
import Footer from "../Common/Footer";
import MobileNavbar from "../Common/MobileNavbar";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <MobileNavbar />
      <div className="lg:mt-[190px] mt-[322px]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
