import PortfolioSpring from "@/components/portfolio/spring/PortfolioSpring";
import SeoData from "@/components/tools/SeoData";
import { getMainPage } from "@/lib/helper/contentConverter";

const SpringPage = () => {
  const { data: spring } = getMainPage("/portfolio/spring.mdx");

  return (
    <main>
      <SeoData
        meta_title={"Portfolio Page"}
        description={"Portfolio Page Description"}
      />
      <PortfolioSpring data={spring} />;
    </main>
  );
};

export default SpringPage;
