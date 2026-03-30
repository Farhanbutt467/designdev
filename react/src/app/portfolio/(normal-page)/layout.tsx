import ScrollSmootherComponent from "@/components/tools/ScrollSmoother";
import ToolsComponent from "@/components/tools";
import ScrollTop from "@/components/tools/ScrollTop";
import InnerHeader1 from "@/components/headers/InnerHeader1";
import BrandingHeader from "@/components/headers/BrandingHeader";

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
          <BrandingHeader maxWidth="!max-w-[1850px]" />
          <div>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
