import TeamHero from "@/components/team/TeamHero";
import TeamImageArea from "@/components/team/TeamImageArea";
import TeamArea from "@/components/team/TeamArea";
import TeamCounterArea from "@/components/team/TeamCounterArea";
import TeamCommunity from "@/components/team/TeamCommunity";
import { getAllPages, getMainPage } from "@/lib/helper/contentConverter";
import SeoData from "@/components/tools/SeoData";

const TeamPage = () => {
  const { data: teamInnerData } = getMainPage("/team/main/_index.mdx");
  const teamMembers = getAllPages("/team/main");

  const {
    meta,
    hero,
    total_employee,
    image,
    team_area,
    counter_area,
    community_area,
  } = teamInnerData || {};

  return (
    <main>
      <SeoData
        meta_title={meta?.meta_title}
        description={meta?.meta_description}
      />
      <TeamHero {...hero} />
      <TeamImageArea totalEmployee={total_employee} image={image} />
      <TeamArea teamMembers={teamMembers} {...team_area} />
      <TeamCounterArea {...counter_area} />
      <TeamCommunity {...community_area} />
    </main>
  );
};

export default TeamPage;
