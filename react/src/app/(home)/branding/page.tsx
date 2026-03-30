import { getMainPage, getAllPages } from "@/lib/helper/contentConverter";

import BrandingHero from "@/components/hero/BrandingHero";
import BrandingWork from "@/components/work/branding/BrandingWork";
import BrandingFunFact from "@/components/funFact/branding/BrandingFunFact";
import BrandingService from "@/components/service/branding/BrandingService";
import BrandingProcess from "@/components/process/branding/BrandingProcess";
import BrandingImage from "@/components/image/BrandingImage";
import BrandingTestimonial from "@/components/testimonial/branding/BrandingTestimonial";
import BrandingTeam from "@/components/team/branding/BrandingTeam";
import BrandingBlog from "@/components/blog/branding/BrandingBlog";
import Cta1 from "@/components/cta/Cta1";
import SeoData from "@/components/tools/SeoData";
import RefreshGsap from "@/components/tools/RefreshGsap";

const Branding = () => {
  const { data: hero } = getMainPage("/heros/branding-hero.mdx");
  const works = getAllPages("/works/branding");
  const { data: work } = getMainPage("/works/branding/_main.mdx");
  const { data: funFact } = getMainPage("/funFact/branding-fun-fact.mdx");
  const { data: service } = getMainPage("services/branding/_main.mdx");
  const services = getAllPages("services/branding");
  const { data: process } = getMainPage("/process/branding-process.mdx");
  const { data: image } = getMainPage("/image/branding-image.mdx");
  const { data: testimonial } = getMainPage(
    "/testimonial/branding-testimonial.mdx"
  );
  const { data: brands } = getMainPage("/brands/brands1.mdx");
  const { data: team } = getMainPage("/team/branding/_main.mdx");
  const teamMembers = getAllPages("/team/main");
  const { data: blogSection } = getMainPage("/blogs/branding/_main.mdx");
  const blogs = getAllPages("/blogs/branding");
  const { data: cta } = getMainPage("/ctas/cta1.mdx");

  return (
    <main>
      <SeoData
        title="Arolax Branding Agency"
        description="Arolax Branding Agency Description"
      />
      <RefreshGsap />
      <BrandingHero {...hero} />
      <BrandingWork works={works} {...work} />
      <BrandingFunFact {...funFact} />
      <BrandingService services={services} {...service} />
      <BrandingProcess {...process} />
      <BrandingImage {...image} />
      <BrandingTestimonial {...testimonial} brands={brands?.brands} />
      <BrandingTeam {...team} teamMembers={teamMembers} />
      <BrandingBlog {...blogSection} blogs={blogs} />
      <Cta1 {...cta} />
    </main>
  );
};

export default Branding;
