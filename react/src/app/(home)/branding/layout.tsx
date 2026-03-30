import React from "react";
import BrandingHeader from "@/components/headers/BrandingHeader";
import Footer1 from "@/components/footer/Footer1";
import navigation from "@/config/navigation.json";
import ScrollSmootherComponent from "@/components/tools/ScrollSmoother";
import ToolsComponent from "@/components/tools";
import ScrollTop from "@/components/tools/ScrollTop";

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="instrument">
      <ScrollSmootherComponent />
      <ToolsComponent />
      <ScrollTop />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <BrandingHeader onlyDark />
          <div>{children}</div>
          <Footer1 footerNav={navigation.footer1} />
        </div>
      </div>
    </div>
  );
};

export default Layout;
