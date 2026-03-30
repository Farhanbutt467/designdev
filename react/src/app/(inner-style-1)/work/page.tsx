import SeoData from "@/components/tools/SeoData";
import WorkInner from "@/components/work/WorkInner";
import { getAllPages, getMainPage } from "@/lib/helper/contentConverter";

const Works = () => {
  const { data: workInnerData } = getMainPage("/works/main/_index.mdx");
  const works = getAllPages("/works/main");

  const { meta, title, description, icon } = workInnerData || {};

  return (
    <main>
      <SeoData
        meta_title={meta?.meta_title}
        description={meta?.meta_description}
      />
      <div className="container2">
        <WorkInner
          title={title}
          description={description}
          icon={icon}
          projects={works}
        />
      </div>
    </main>
  );
};

export default Works;
