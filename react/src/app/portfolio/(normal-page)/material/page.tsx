import PortfolioMaterial from "@/components/portfolio/material/PortfolioMaterial";
import SeoData from "@/components/tools/SeoData";
import { getMainPage } from "@/lib/helper/contentConverter";

const Page = () => {
  const { data: material } = getMainPage("/portfolio/material.mdx");

  return (
    <main>
      <SeoData
        meta_title={"Portfolio Page"}
        description={"Portfolio Page Description"}
      />
      <PortfolioMaterial data={material} />
    </main>
  );
};

export default Page;
