import VideoHero from "@/components/hero/VideoHero";
import VideoTextSlider from "@/components/slider/video/VideoTextSlider";
import { getMainPage } from "@/lib/helper/contentConverter";
import VideoClients from "@/components/clients/VideoClients";
import VideoGallerySlider from "@/components/slider/video/VideoGallerySlider";
import VideoAbout from "@/components/about/VideoAbout";
import { getAllPages } from "@/lib/helper/contentConverter";
import VideoService from "@/components/service/video/VideoService";
import VideoTeam from "@/components/team/video/VideoTeam";
import VideoWork from "@/components/work/video/VideoWork";
import VideoPricing from "@/components/pricing/video/VideoPricing";
import VideoTestimonial from "@/components/testimonial/video/VideoTestimonial";
import SeoData from "@/components/tools/SeoData";

const VideoHome = () => {
  const { data: hero } = getMainPage("/heros/video-hero.mdx");
  const { data: slider } = getMainPage("/slider/video/text-slider.mdx");
  const { data: clients } = getMainPage("/brands/brands1.mdx");
  const { data: clientTitle } = getMainPage("/clients/video-clients.mdx");
  const { data: gallerySlider } = getMainPage(
    "/slider/video/gallery-slider.mdx"
  );
  const { data: about } = getMainPage("/about/video-about.mdx");
  const { data: service } = getMainPage("/services/video/_main.mdx");
  const services = getAllPages("/services/video");
  const { data: team } = getMainPage("/team/video/_main.mdx");
  const { data: work } = getMainPage("/works/video/_main.mdx");
  const { data: pricing } = getMainPage("/pricings/video/main.mdx");
  const { data: testimonial } = getMainPage("/testimonial/video-testimonial.mdx");

  return (
    <main>
      <SeoData
        title="Arolax Video Agency"
        description="Arolax Video Agency Description"
      />
      <VideoHero {...hero} />
      <VideoTextSlider {...slider} />
      <VideoGallerySlider {...gallerySlider} />
      <VideoAbout {...about} />
      <VideoService {...service} services={services} />
      <VideoTeam {...team} />
      <VideoWork {...work} />
      <VideoTestimonial {...testimonial} />
      <VideoPricing {...pricing} />
      <VideoClients {...clientTitle} clients={clients.brands} />
    </main>
  );
};

export default VideoHome;
