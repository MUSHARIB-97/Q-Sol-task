import SideNavbar from "@/custom-component/side-nav/SideNavbar";
import TopNavbar from "@/custom-component/top-nav/TopNav";
import React, { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col h-screen bg-[#eeedf2]">
      <TopNavbar />
      <div className="flex flex-1">
        <SideNavbar />
        <div className="flex flex-1 bg-[#eeedf2]">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
