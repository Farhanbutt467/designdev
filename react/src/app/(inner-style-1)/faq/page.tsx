import TopLineButton from "@/components/elements/button/TopLineButton";
import IntroSection from "@/components/elements/introSection/IntroSection";
import FaqSection from "@/components/faq/branding/FaqSection";
import SeoData from "@/components/tools/SeoData";
import { getMainPage } from "@/lib/helper/contentConverter";

const Faqs = () => {
  const { data: faqsData } = getMainPage("/faqs/branding-faqs.mdx");

  const { action_btn, title, description, faqs, meta } = faqsData || {};
  return (
    <main>
      <SeoData
        title={title}
        meta_title={meta?.meta_title}
        description={meta?.meta_description}
      />
      <div className="container">
        <div className="section-spacing-bottom pt-[127px] xl:pt-[147px] 2xl:pt-[217px]">
          <div className="grid gap-y-[30px] gap-x-[60px] lg:grid-cols-[300px_1fr] xl:grid-cols-[400px_1fr] 2xl:grid-cols-[485px_960px]">
            <div>
              {action_btn?.enable && <TopLineButton action_btn={action_btn} />}
            </div>
            <div>
              <IntroSection title={title} description={description} />
              <div className=" mt-[43px] xl:mt-[73px] 2xl:mt-[93px]">
                <FaqSection faqs={faqs} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Faqs;
