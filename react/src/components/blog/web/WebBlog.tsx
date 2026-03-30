"use client";
import WebSectionTItle from "@/components/sectionTitle/WebSectionTItle";
import ImageComponent from "@/components/tools/ImageComponent";
import { ActionBtnType } from "@/types";
import { TBlogType } from "@/types";
import Link from "next/link";
import WebBlogCard from "@/components/blog/web/WebBlogCard";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";
import hasTextMovAnim from "@/lib/animation/hasTextMovAnim";

type Props = {
  title: string;
  description: string;
  action_btn: ActionBtnType;
  blogs: TBlogType[];
};

const WebBlog = ({ title, description, action_btn, blogs }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null!);

  useGSAP(
    () => {
      hasFadeAnim();
      hasTextMovAnim();
    },
    { scope: containerRef }
  );

  return (
    <section ref={containerRef}>
      <div className="inner-container">
        <div className="py-[60px] xl:py-[140px]">
          <div className="grid gap-y-[10px] gap-x-[60px] sm:grid-cols-[auto,auto] justify-between">
            <div>
              <WebSectionTItle title={title} className=" max-w-[540px]" />
            </div>
            <div
              className="has_fade_anim text-center sm:text-start"
              data-fade-from="right"
              data-delay="0.45"
            >
              <div>
                <p className="sm:max-w-[300px]">{description}</p>
              </div>
              <div className="mt-[14px] lg:mt-[24px]">
                <Link
                  href={action_btn.link}
                  className="wc-btn wc-btn-underline btn-text-flip uppercase text-[14px] font-medium tracking-[0] inline-flex items-center gap-[10px] pb-[4px]"
                >
                  {" "}
                  <span data-text={action_btn.label}>
                    {action_btn.label}
                  </span>{" "}
                  <ImageComponent
                    src={"/assets/imgs/icon/arrow-right-half.png"}
                    darkSrc={"/assets/imgs/icon/arrow-right-half-light.png"}
                    width={21}
                    height={7}
                    alt="icon"
                  />
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-[55px]">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
              {blogs.map((blog, i) => (
                <WebBlogCard {...blog} key={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebBlog;
