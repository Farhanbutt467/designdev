export const dynamic = 'force-static';
import { notFound } from "next/navigation";
import { getAllPages } from "@/lib/helper/contentConverter";
import MDXContent from "@/components/tools/MDXContent";
import WorkDetails from "@/components/work/WorkDetails";
import WorkDetailNav from "@/components/elements/workDetails/WorkDetailNav";
import SeoData from "@/components/tools/SeoData";
import FooterCta from "@/components/footer/FooterCta";

type Props = {
  params: {
    title: string;
  };
};

export const generateStaticParams = () => {
  const blogs = getAllPages("/works/web");
  const paths = blogs.map((program) => ({
    title: program.slug,
  }));

  return paths;
};

const work = ({ params }: Props) => {
  const works = getAllPages("/works/web");
  const slugs = works.map((item) => item.slug);

  if (!(works && works.length)) {
    notFound();
  }
  const work = works.find((item) => item.slug === params.title);

  if (!(work && work.data)) {
    notFound();
  }

  const { title, meta } = work?.data || {};
  return (
    <main className="details-bold">
      <SeoData
        title={title}
        meta_title={meta?.meta_title}
        description={meta?.meta_description}
      />
      <WorkDetails {...work} />
      <div className="container2 result-area">
        <MDXContent content={work.content} />
      </div>
      <WorkDetailNav slugs={slugs} params={params} />
    </main>
  );
};

export default work;




