import SeoAbout from "@/components/about/SeoAbout";
import SeoBlog from "@/components/blog/seo/SeoBlog";
import SeoClients from "@/components/clients/SeoClients";
import Cta2 from "@/components/cta/Cta2";
import SeoFeatures from "@/components/features/seo/SeoFeatures";
import SeoFunFact from "@/components/funFact/seo/SeoFunFact";
import SeoHero from "@/components/hero/SeoHero";
import SeoImage from "@/components/image/SeoImage";
import SeoPricing from "@/components/pricing/seo/SeoPricing";
import SeoReport from "@/components/report/SeoReport";
import SeoService from "@/components/service/seo/SeoService";
import SeoSlider from "@/components/slider/seo/SeoSlider";
import SeoTeam from "@/components/team/seo/SeoTeam";
import SeoTestimonial from "@/components/testimonial/seo/SeoTestimonial";
import SeoData from "@/components/tools/SeoData";
import SeoWork from "@/components/work/seo/SeoWork";
import { getAllPages, getMainPage } from "@/lib/helper/contentConverter";

const Seo = () => {
  const { data: hero } = getMainPage("/heros/seo-hero.mdx");
  const { data: clients } = getMainPage("/brands/brands2.mdx");
  const { data: features } = getMainPage("/features/seo-features.mdx");
  const { data: about } = getMainPage("/about/seo-about.mdx");
  const { data: service } = getMainPage("/services/seo/_main.mdx");
  const services = getAllPages("/services/seo");
  const { data: report } = getMainPage("/report/seo-report.mdx");
  const { data: work } = getMainPage("/works/seo/_main.mdx");
  const works = getAllPages("/works/seo");
  const { data: pricingSection } = getMainPage("/pricings/seo/main.mdx");
  const { data: pricingPlans } = getMainPage("/pricings/seo-pricing.mdx");
  const { data: image } = getMainPage("/image/seo-image.mdx");
  const { data: funFact } = getMainPage("/funFact/seo-fun-fact.mdx");
  const { data: clientFeedback } = getMainPage("/testimonial/seo/_main.mdx");
  const { data: testimonials } = getMainPage(
    "/testimonial/seo-testimonial.mdx"
  );
  const { data: slider } = getMainPage("/slider/seo/text-slider.mdx");
  const { data: cta2Content } = getMainPage("/ctas/cta2.mdx");
  const { data: blog } = getMainPage("/blogs/seo/_main.mdx");
  const blogs = getAllPages("/blogs/seo");
  const { data: teamSection } = getMainPage("/team/seo/_main.mdx");
  const teamMembers = getAllPages("/team/main");

  return (
    <main>
      <SeoData
        title="Arolax SEO Agency"
        description="Arolax SEO Agency Description"
      />
      <SeoHero {...hero} />
      <SeoClients brands={clients.brands} />
      <SeoFeatures {...features} />
      <SeoAbout {...about} />
      <SeoService services={services} {...service} />
      <SeoReport {...report} />
      <SeoWork works={works} {...work} />
      <SeoPricing pricing={pricingPlans.pricing} {...pricingSection} />
      <SeoImage {...image} />
      <SeoFunFact {...funFact} />
      <SeoTestimonial
        clientFeedbackSection={clientFeedback}
        testimonials={testimonials.testimonials}
      />
      <SeoTeam teamMember={teamMembers} {...teamSection} />
      <SeoBlog blogs={blogs} {...blog} />
      <SeoSlider {...slider} />
      <Cta2 {...cta2Content} />
    </main>
  );
};

export default Seo;
