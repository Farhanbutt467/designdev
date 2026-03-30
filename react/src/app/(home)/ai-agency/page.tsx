import AiAbout from "@/components/about/AiAbout";
import AiBlog from "@/components/blog/ai/AiBlog";
import AiClient from "@/components/clients/AiClient";
import AiFaq from "@/components/faq/ai/AiFaq";
import AiFeature from "@/components/features/ai/AiFeature";
import AiHero from "@/components/hero/Ai/AiHero";
import AiInfo from "@/components/info/AiInfo";
import AiService from "@/components/service/ai/AiService";
import SeoData from "@/components/tools/SeoData";
import AiVideo from "@/components/video/ai/AiVideo";
import { getAllPages, getMainPage } from "@/lib/helper/contentConverter";

const AiAgency = () => {
  const { data: hero } = getMainPage("/heros/ai-hero.mdx");
  const { data: about } = getMainPage("/about/ai-about.mdx");
  const { data: infoSection } = getMainPage("/info/ai-info.mdx");
  const { data: features } = getMainPage("/features/ai-features.mdx");
  const { data: service } = getMainPage("/services/ai/_main.mdx");
  const services = getAllPages("/services/ai");
  const { data: video } = getMainPage("/video/ai-video.mdx");
  const { data: client } = getMainPage("/clients/ai-clients.mdx");
  const { data: faqData } = getMainPage("/faqs/ai-faqs.mdx");
  const { data: blog } = getMainPage("/blogs/ai/_main.mdx");
  const blogs = getAllPages("/blogs/ai");

  return (
    <main>
      <SeoData
        title="Arolax Ai Agency"
        description="Arolax Ai Agency Description"
      />
      <AiHero {...hero} />
      <AiAbout {...about} />
      <AiInfo {...infoSection} />
      <AiFeature {...features} />
      <AiService {...service} services={services} />
      <AiVideo {...video} />
      <AiClient {...client} />
      <AiFaq {...faqData} />
      <AiBlog blogs={blogs} {...blog} />
    </main>
  );
};

export default AiAgency;
