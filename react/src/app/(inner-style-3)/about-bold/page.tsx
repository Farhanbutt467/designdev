import AboutBoldHero from "@/components/about/AboutBoldHero";
import AboutBoldProcess from "@/components/about/AboutBoldProcess";
import { getMainPage } from "@/lib/helper/contentConverter";
import { getAllPages } from "@/lib/helper/contentConverter";
import ClientSlider from "@/components/clients/ClientSlider";
import AboutCounter from "@/components/about/AboutCounter";
import AboutBoldAward from "@/components/about/AboutBoldAward";
import AboutBoldTestimonial from "@/components/testimonial/AboutBoldTestimonial";
import AboutBoldTeam from "@/components/team/AboutBoldTeam";
import SeoData from "@/components/tools/SeoData";

const AboutBold = () => {
  const { data } = getMainPage("/about/web/index.mdx");
  const { data: clients } = getMainPage("/brands/brands3.mdx");
  const { data: testimonial_data } = getMainPage(
    "/testimonial/about_bold_testimonial.mdx"
  );
  const { data: team } = getMainPage("/team/about_bold.mdx");
  const teamMembers = getAllPages("/team/main");

  return (
    <main>
      <SeoData
        title={data?.title}
        meta_title={data?.meta?.meta_title}
        description={data?.meta?.meta_description}
      />
      <AboutBoldHero data={data.hero} />
      <AboutBoldProcess process_list={data.process_list} />
      <ClientSlider
        clients={clients.brands}
        shapeImage="/assets/imgs/shape/img-s-83.png"
      />
      <AboutCounter {...data.counter_area} />
      <AboutBoldAward {...data.awards_area} />
      <AboutBoldTestimonial testimonials={testimonial_data.testimonials} />
      <AboutBoldTeam teamMembers={teamMembers} {...team} />
    </main>
  );
};

export default AboutBold;
