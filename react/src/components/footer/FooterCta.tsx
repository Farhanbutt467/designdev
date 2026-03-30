import ImageComponent from "@/components/tools/ImageComponent";
import Link from "next/link";

type Props = {
  ctaText: string;
  ctaMail: string;
};

const FooterCta = ({ ctaText, ctaMail }: Props) => {
  return (
    <section>
      <div className="inner-container">
        <div className="main-section-spacing text-text-fixed-2">
          <div className="text-center">
            <div className="">
              <span className="has_fade_anim  text-[30px] xl:text-[40px] font-bold font-teko leading-none uppercase">
                🖐️ Hello
                <ImageComponent
                  src="/assets/imgs/shape/img-s-6-light.png"
                  width={15}
                  height={28}
                  alt="icon"
                  className="inline-block mt-[-6px] ms-[10px]"
                />
              </span>
            </div>
            <div className="mt-[32px] xl:mt-[42px]">
              <h2 className="has_fade_anim uppercase  max-w-[500px] text-[40px] sm:text-[60px] lg:text-[100px] xl:text-[150px] 2xl:text-[190px] leading-[.82] xl:max-w-[800px] my-0 mx-auto">
                {ctaText}
              </h2>
            </div>

            <div className="btn-wrapper has_fade_anim mt-[18px] text">
              <Link
                href={`mailto:${ctaMail}`}
                className="wc-btn wc-btn-underline text-[22px] pb-[5px] xl:text-[35px] 2xl:text-[50px] xl:pb-2 before:!h-[3px]"
              >
                {ctaMail}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterCta;
