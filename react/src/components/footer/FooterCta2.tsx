import ImageComponent from "@/components/tools/ImageComponent";
import Link from "next/link";

const FooterCta2 = () => {
  return (
    <div>
      <div className="inner-container">
        <div className="section-spacing-top pb-[60px] xl:pb-[80px] 2xl:pb-[100px]">
          <Link href="/contact-bold">
            <div
              className="has_fade_anim relative text-center"
              data-fade-from="bottom"
              data-fade-offset="50"
            >
              <ImageComponent
                src="/assets/imgs/shape/img-s-43.png"
                darkSrc="/assets/imgs/shape/img-s-43-light.png"
                width={1290}
                height={424}
                alt="shape"
                className="inline-block max-w-full"
              />
              <ImageComponent
                src="/assets/imgs/shape/img-s-44-light.png"
                darkSrc="/assets/imgs/shape/img-s-44.png"
                width={219}
                height={219}
                alt="shape-1"
                className="w-[90px] sm:w-[110px] md:w-[140px] lg:w-[170px] 2xl:w-[219px] top-[11%] start-[26%] absolute"
              />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FooterCta2;
