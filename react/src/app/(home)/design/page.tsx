import { getMainPage } from "@/lib/helper/contentConverter";
import DesignHero from "@/components/hero/DesignHero";
import DesignTextSlider from "@/components/slider/design/DesignTextSlider";
import DesignAbout from "@/components/about/DesignAbout";
import BindBtnMoveEffect from "@/components/tools/BindBtnMoveEffect";
import DesignImage from "@/components/image/DesignImage";
import { getAllPages } from "@/lib/helper/contentConverter";
import DesignService from "@/components/service/design/DesignService";
import DesignWork from "@/components/work/design/DesignWork";
import DesignTestimonial from "@/components/testimonial/design/DesignTestimonial";
import DesignAward from "@/components/award/design/DesignAward";
import DesignTeam from "@/components/team/design/DesignTeam";
import DesignImage2 from "@/components/image/DesignImage2";
import DesignBlog from "@/components/blog/design/DesignBlog";
import SeoData from "@/components/tools/SeoData";

const Design = () => {
  const { data: hero } = getMainPage("/heros/design-hero.mdx");
  const { data } = getMainPage("/slider/design/text-slider.mdx");
  const { data: about } = getMainPage("/about/design-about.mdx");
  const { data: image } = getMainPage("/image/design-image.mdx");
  const { data: service } = getMainPage("/services/design/_main.mdx");
  const services = getAllPages("/services/design");
  const works = getAllPages("/works/design");
  const { data: workMain } = getMainPage("/works/design/_main.mdx");
  const { data: testimonial } = getMainPage("/testimonial/design-testimonial.mdx");
  const { data: award } = getMainPage("/award/design-award.mdx");
  const { data: team } = getMainPage("/team/design/_main.mdx");
  const teamMembers = getAllPages("/team/design");
  const { data: image2 } = getMainPage("/image/design-image2.mdx");
  const { data: blog } = getMainPage("/blogs/design/_main.mdx");
  const blogs = getAllPages("/blogs/design");

  return (
    <main>
      <BindBtnMoveEffect />
      <SeoData
        title="Arolax Design Agency"
        description="Arolax Design Agency Description"
      />
      <DesignHero {...hero} />
      <DesignTextSlider sliderItems={data} />
      <DesignAbout {...about} />
      <DesignImage {...image} />
      <DesignService {...service} services={services} />
      <DesignWork {...workMain} projects={works} />
      <DesignTestimonial {...testimonial} />
      <DesignAward {...award} />
      <DesignTeam teamMembers={teamMembers} {...team} />
      <DesignImage2 {...image2} />
      <DesignBlog blogs={blogs} {...blog} />
    </main>
  );
};

export default Design;
