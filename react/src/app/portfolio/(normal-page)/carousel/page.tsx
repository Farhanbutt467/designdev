import PortfolioCarousel from "@/components/portfolio/carousel/PortfolioCarousel";
import SeoData from "@/components/tools/SeoData";
import { getMainPage } from "@/lib/helper/contentConverter";

const Page = () => {
  const { data: carousel } = getMainPage("/portfolio/carousel.mdx");

  return (
    <main>
      <SeoData
        meta_title={"Portfolio Page"}
        description={"Portfolio Page Description"}
      />
      <PortfolioCarousel data={carousel} />
    </main>
  );
};

export default Page;
