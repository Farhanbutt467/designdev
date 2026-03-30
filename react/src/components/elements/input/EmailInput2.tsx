"use client";
import { useState } from "react";
import Image from "next/image";

const EmailInput2 = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEmail("");
  };
  return (
    <div className=" md:pt-[6px] md:pb-[19px] md:ps-12 xl:pb-[9px] xl:pt-4 xl:ps-[108px] md:border-s md:border-[#ffffff14]">
      <form onSubmit={handleSubmit} className="subscribe_form">
        <div className=" flex gap-[10px] border-b border-white pb-[25px]">
          <input
            type="email"
            className="text-[24px] bg-transparent text-text-fixed-2  focus:outline-none font-light w-full border-0"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <button type="submit" className="subscribe_btn rtl:rotate-180">
            <Image
              src="/assets/imgs/icon/arrow-light.png"
              alt="icon"
              width={62}
              height={42}
            />
          </button>
        </div>
      </form>
    </div>
  );
};

export default EmailInput2;
