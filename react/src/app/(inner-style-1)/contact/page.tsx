import { getMainPage } from "@/lib/helper/contentConverter";
import ContactHero from "@/components/contact/ContactHero";
import Image from "next/image";
import ContactArea from "@/components/contact/ContactArea";
import SeoData from "@/components/tools/SeoData";

const Contact = () => {
  const { data: contactData } = getMainPage("/contact/_index.mdx");

  const { meta, hero, image, contact: mainContact } = contactData || {};
  return (
    <main>
      <SeoData
        meta_title={meta?.meta_title}
        description={meta?.meta_description}
      />
      <ContactHero {...hero} />
      <div className="overflow-hidden">
        <Image
          src={image}
          alt="image"
          width={1920}
          height={850}
          className="w-full"
        />
      </div>
      <ContactArea {...mainContact} />
    </main>
  );
};

export default Contact;
