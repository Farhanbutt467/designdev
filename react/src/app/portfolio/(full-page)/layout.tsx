import ScrollSmootherComponent from "@/components/tools/ScrollSmoother";
import ToolsComponent from "@/components/tools";
import ScrollTop from "@/components/tools/ScrollTop";
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
          <BrandingHeader maxWidth="!max-w-[1850px]" onlyDark />
          <div>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
