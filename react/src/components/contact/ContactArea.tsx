"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";
import ContactInfo from "@/components/contact/ContactInfo";
import FlexibleForm from "@/components/form/branding/FlexibleForm";
import InnerSectionTitle from "../sectionTitle/InnerSectionTitle";

type ContactInfo = {
  header: {
    title: string;
    description: string;
  };
  info: {
    title: string;
    contact_list: {
      phone: string;
      email: string;
      address: string;
    };
  };
};

const ContactArea = ({ header, info }: ContactInfo) => {
  const containerRef = useRef<HTMLDivElement>(null!);

  useGSAP(
    () => {
      hasFadeAnim();
    },
    { scope: containerRef }
  );

  return (
    <section className="inner-container" ref={containerRef}>
      <div className="main-section-spacing ">
        <div className="grid gap-y-5 gap-x-[60px] lg:grid-cols-[1fr_auto]">
          <InnerSectionTitle
            title={header.title}
            className="large max-w-[850px] 2xl:!text-[120px] !leading-[0.94]"
          />
          <p className="has_fade_anim max-w-[300px]">{header.description}</p>
        </div>
        <div className="grid gap-y-10 gap-x-[60px] mt-[42px] xl:mt-[72px] 2xl:mt-[112px] lg:grid-cols-[1fr_600px] xl:grid-cols-[1fr_740px]">
          <ContactInfo {...info} />
          <div className="has_fade_anim" data-delay="0.30">
            <FlexibleForm btnText="Send Message" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactArea;
