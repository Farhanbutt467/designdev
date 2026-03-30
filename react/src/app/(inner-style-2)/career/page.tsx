import { getMainPage } from "@/lib/helper/contentConverter";
import { getAllPages } from "@/lib/helper/contentConverter";
import CareerHero from "@/components/career/CareerHero";
import TeamCommunity from "@/components/team/TeamCommunity";
import CareerHiring from "@/components/career/CareerHiring";
import CareerProcess from "@/components/career/CareerProcess";
import SeoData from "@/components/tools/SeoData";

const Career = () => {
  const { data: career } = getMainPage("/career/branding/_index.mdx");
  const jobs = getAllPages("/career/branding/positions");

  const { title, hero, community_area, hiring_title, process_area, meta } =
    career || {};
  return (
    <main>
      <SeoData
        title={title}
        meta_title={meta?.meta_title}
        description={meta?.meta_description}
      />
      <CareerHero {...hero} />
      <TeamCommunity {...community_area} />
      <CareerHiring title={hiring_title} jobs={jobs} />
      <CareerProcess {...process_area} />
    </main>
  );
};

export default Career;
