export const dynamic = 'force-static';
import { notFound } from "next/navigation";
import { getAllPages } from "@/lib/helper/contentConverter";
import { getMainPage } from "@/lib/helper/contentConverter";
import MDXContent from "@/components/tools/MDXContent";
import AiHero from "@/components/hero/Ai/AiHero";
import ClientArea from "@/components/clients/ClientArea";
import PricingArea from "@/components/pricing/PricingArea";
import SeoData from "@/components/tools/SeoData";
import ContactBanner from "@/components/banner/ContactBanner";
import ServiceDetailsFaq from "@/components/service/ServiceDetailsFaq";

type Props = {
  params: {
    title: string;
  };
};

export const generateStaticParams = () => {
  const services = getAllPages("/services/main");
  const paths = services.map((program) => ({
    title: program.slug,
  }));

  return paths;
};

const page = ({ params }: Props) => {
  const services = getAllPages("/services/main");
  const { data: pricingData } = getMainPage("/pricings/main-pricing.mdx");
  const { data: brands } = getMainPage("/brands/brands1.mdx");
  const { data: hero } = getMainPage("/heros/ai-hero.mdx");

  if (!(services && services.length)) {
    notFound();
  }
  const service = services.find((item) => item.slug === params.title);

  if (!(service && service.data)) {
    notFound();
  }

  const { title, meta, faqs, faq_title, contactTitle, btn_text } =
    service.data || {};

  return (
    <main className="instrument-ai" theme-setting="style-4">
      <SeoData
        title={title}
        meta_title={meta?.meta_title}
        description={meta?.meta_description}
      />
      <AiHero {...hero} title={title} />
      <div className="service-details-inner">
        <MDXContent content={service.content} />
        <ServiceDetailsFaq faqs={faqs} faqTitle={faq_title} />
        <ClientArea brands={brands.brands} />
        <ContactBanner contactTitle={contactTitle} btn_text={btn_text} />
        <PricingArea {...pricingData.pricing} />
      </div>
    </main>
  );
};

export default page;




