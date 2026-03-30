"use client";

import WebContactBanner from "@/components/banner/WebContactBanner";

type Props = {
  contactBanner: {
    contactTitle: string;
    btn_text: string;
    shape: string;
  };
};

const WebContact = ({ contactBanner }: Props) => {
  return (
    <section className="contact-area">
      <div className="container uppercase text-center">
        <WebContactBanner {...contactBanner} />
      </div>
    </section>
  );
};

export default WebContact;
