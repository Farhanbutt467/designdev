import { convertWithBr } from "@/lib/helper/converter";

type Props = {
  title: string;
  contact_list: {
    phone: string;
    email: string;
    address: string;
  };
};

const ContactInfo = ({ title, contact_list }: Props) => {
  const { phone, email, address } = contact_list;
  return (
    <div className="has_fade_anim">
      <p className="text-[26px] leading-[1.25] font-medium max-w-[360px] text-text">
        {title}
      </p>
      <ul className="mt-[26px] text-[18px] text-text-3">
        <li className="mt-0 leading-[24px] ">
          <a href={`tel:${phone}`} className="underline underline-offset-2">
            +{phone}
          </a>
        </li>
        <li className="mt-[15px]">
          <a className="underline underline-offset-2" href={`mailto:${email}`}>
            {email}
          </a>
        </li>
        <li
          className="mt-[15px]"
          dangerouslySetInnerHTML={convertWithBr(address)}
        />
      </ul>
    </div>
  );
};

export default ContactInfo;
