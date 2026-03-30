import { getMainPage } from "@/lib/helper/contentConverter";
import SeoData from "@/components/tools/SeoData";
import PortfolioSlicer from "@/components/portfolio/slicer/PortfolioSlicer";

const SlicerPage = () => {
  const { data: slicer } = getMainPage("/portfolio/slicer.mdx");

  return (
    <main>
      <SeoData
        meta_title={"Portfolio Page"}
        description={"Portfolio Page Description"}
      />
      <PortfolioSlicer data={slicer} />
    </main>
  );
};

export default SlicerPage;
