import Logo from "@/components/elements/logo/Logo";
import FooterNav from "@/components/footer/FooterNav";
import siteConfig from "@/config/siteConfig.json";
import EmailInput from "@/components/elements/input/EmailInput";
import { SocialShare1 } from "../tools/Social";

type Props = {
  footerNav: {
    id: number;
    title: string;
    children?: {
      name: string;
      path: string;
      isLocation?: boolean;
    }[];
  }[];
};

const Footer1 = ({ footerNav }: Props) => {
  const { site_info, footer_info, social } = siteConfig;
  const { label, company } = footer_info?.copyright || {};
  const [firstWord, ...remainingWords] = company.split(" ");
  return (
    <footer className="main-section-style !pb-0 bg-background-fixed">
      <div className="container">
        <div className="section-spacing-top pb-[54px] xl:pb-[94px] overflow-hidden grid gap-y-[50px] gap-x-[60px] xl:gap-y-20 xl:gap-x-[60px] justify-between grid-cols-[auto] sm:grid-cols-[auto,auto] md:grid-cols-[auto,auto,auto] xl:grid-cols-[305px,190px,190px,385px] 2xl:grid-cols-[655px,190px,190px,385px]">
          <div className="relative xl:row-span-2">
            <Logo
              light={true}
              url={site_info?.logo_light_2}
              customWidth={200}
              customHeight={54}
              className="max-h-[34px] xl:max-h-[54px] !w-auto"
            />
            <div className="absolute w-[1px] h-[calc(100%+400px)] bg-[#202020] end-0 top-[-200px] hidden xl:block"></div>
          </div>
          {footerNav.map((item) => (
            <FooterNav key={item.id} {...item} />
          ))}
          <div className=" sm:col-span-2 xl:col-auto lg:row-start-2 xl:row-start-1 xl:col-start-4 order-1 sm:order-0">
            <h2 className="title text-text-fixed-2 text-[22px] xl:text-[30px] leading-[.73]">
              Newsletter
            </h2>
            <div className="newstaller_text mt-[29px] text-text-fixed-2">
              <p className="text-[#999999">
                Feel free to reach out if you want to collaborate with us, or
                simply have a chat.
              </p>
            </div>
            <EmailInput />
          </div>

          <div className="">
            <h2 className="title text-text-fixed-2 text-[22px] xl:text-[30px] leading-[.73]">
              Follow Us
            </h2>
            <ul className="flex gap-5 mt-9 ">
              {social.map((item, i) => (
                <li key={`social_share-${i}`}>
                  {SocialShare1(
                    item,
                    " text-text-fixed-3 hover:text-text-fixed-2"
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className=" border-t border-[#202020]">
        <div className="container">
          <div className=" py-[22px] xl:py-8 relative">
            <div className="">
              <p className=" text-center font-medium">
                {label}
                <span className="text-text-fixed-2">{firstWord}</span>{" "}
                {remainingWords.join(" ")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer1;
