import Footer1 from "@/components/footer/Footer1";
import navigation from "@/config/navigation.json";
import ScrollSmootherComponent from "@/components/tools/ScrollSmoother";
import ToolsComponent from "@/components/tools";
import ScrollTop from "@/components/tools/ScrollTop";
import InnerHeader1 from "@/components/headers/InnerHeader1";

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="beatrice-kanit">
      <ScrollSmootherComponent />
      <ToolsComponent />
      <ScrollTop />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <InnerHeader1 />
          <div>{children}</div>
          <Footer1 footerNav={navigation.footer1} />
        </div>
      </div>
    </div>
  );
};

export default Layout;
