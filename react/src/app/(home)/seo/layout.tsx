import React from "react";
import SeoHeader from "@/components/headers/SeoHeader";
import navigation from "@/config/navigation.json";
import ScrollSmootherComponent from "@/components/tools/ScrollSmoother";
import Footer1 from "@/components/footer/Footer1";
import ToolsComponent from "@/components/tools";
import ScrollTop from "@/components/tools/ScrollTop";

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="spacegrotesk root-layout" theme-setting="style-2">
      <ScrollSmootherComponent />
      <ToolsComponent />
      <ScrollTop />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <SeoHeader />
          <div>{children}</div>
          <Footer1 footerNav={navigation.footer1} />
        </div>
      </div>
    </div>
  );
};

export default Layout;
