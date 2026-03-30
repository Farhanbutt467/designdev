export const dynamic = 'force-static';
import { notFound } from "next/navigation";
import { getAllPages } from "@/lib/helper/contentConverter";
import MDXContent from "@/components/tools/MDXContent";
import SeoData from "@/components/tools/SeoData";
import TeamMemberDetails from "@/components/team/TeamMemberDetails";

type Props = {
  params: {
    slug: string;
  };
};

export const generateStaticParams = () => {
  const teams = getAllPages("/team/main");
  const paths = teams.map((program) => ({
    title: program.slug,
  }));

  return paths;
};

const team = ({ params }: Props) => {
  const teamMembers = getAllPages("/team/main");

  if (!(teamMembers && teamMembers.length)) {
    notFound();
  }
  const member = teamMembers.find((item) => item.slug === params.slug);

  if (!(member && member.data)) {
    notFound();
  }

  const { title, meta } = member.data || {};

  return (
    <main>
      <SeoData
        title={title}
        meta_title={meta?.meta_title}
        description={meta?.meta_description}
      />
      <TeamMemberDetails {...member.data} />
      <div>
        <MDXContent content={member.content} />
      </div>
    </main>
  );
};

export default team;




