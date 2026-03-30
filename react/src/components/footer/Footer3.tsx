import EmailInput from "@/components/elements/input/EmailInput";
import siteConfig from "@/config/siteConfig.json";
import Logo from "@/components/elements/logo/Logo";
import Link from "next/link";
import { SocialShare1 } from "../tools/Social";

type Props = {
  footerNav: {
    id: number;
    title: string;
    children?: {
      name: string;
      path: string;
    }[];
  }[];
};

const Footer3 = ({ footerNav }: Props) => {
  const { site_info, footer_info, social } = siteConfig;

  return (
    <div className="inner-container large">
      <footer className="footer_area bg-background-3 px-[15px] lg:px-[45px]">
        <div className="inner-container">
          <div className="footer_area_inner grid gap-y-[50px] gap-x-[60px] xl:gap-y-20 xl:gap-x-[50px] justify-between overflow-hidden grid-cols-[auto] sm:grid-cols-[auto_auto] md:grid-cols-[auto_auto_auto] xl:grid-cols-[265px_190px_190px_385px] 2xl:grid-cols-[365px_190px_190px_385px] py-[60px] xl:py-[100px] 2xl:py-[130px]">
            <div className="footer_widget_wrapper min-w-[130px]">
              <div className="footer_logo">
                <Logo
                  light={true}
                  url={site_info?.logo_light_2}
                  customWidth={125}
                  customHeight={54}
                  className="max-h-[34px] !w-auto"
                />
              </div>
              <p className="info_text max-w-[270px] mt-[26px] text-text-fixed-3">
                {site_info?.info}
              </p>
              <ul className="social_links flex gap-5 mt-9 xl:mt-14 ">
                {social.map((item, i) => (
                  <li
                    key={`social_share-${i}`}
                    className="leading-none text-text-fixed-3"
                  >
                    {SocialShare1(
                      item,
                      " hover:text-text-fixed-2 transition-all duration-300"
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {footerNav.map((item) => (
              <div key={item.id} className="footer_widget_wrapper in-w-[130px]">
                <h2 className="title text-text-fixed-2 text-[22px] xl:text-[24px] leading-[.73] font-medium">
                  {item.title}
                </h2>
                <ul className="footer_nav_list mt-[27px]">
                  {item.children?.map((childItem, index) => (
                    <li
                      key={index}
                      className="text-[18px] leading-[30px] text-text-fixed-3 "
                    >
                      <Link
                        href={childItem.path}
                        className="hover:text-text-fixed-2 transition-all duration-300"
                      >
                        {childItem.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div className="footer_widget_wrapper min-w-[130px] sm:col-span-2 xl:col-span-1">
              <h2 className="title text-[22px] xl:text-[24px] leading-[.73] font-medium text-text-fixed-2">
                Newsletter
              </h2>
              <div className="newsletter_text mt-[29px]">
                <p className="text text-text-fixed-3">
                  Feel free to reach out if you want to collaborate with us, or
                  simply have a chat.
                </p>
              </div>
              <EmailInput
                className="rounded-[5px]"
                iconClassName="text-theme"
              />
            </div>
          </div>
        </div>
        <div className="copyright_area">
          <div className="inner-container">
            <div className="copyright_area_inner border-t border-[#FFFFFF14] py-[22px] xl:py-[32px] relative ">
              <div className="copyright-text">
                <p className="text text-center font-medium text-text-fixed-3">
                  {footer_info.copyright.label}{" "}
                  <Link href={footer_info.copyright.link} target="_blank">
                    <span className="text-text-fixed-2">
                      {footer_info.copyright.company}
                    </span>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer3;
