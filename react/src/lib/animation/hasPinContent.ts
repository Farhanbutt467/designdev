import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const hasPinContent = (
  element?: any,
  start?: string,
  dWidth: number = 1023
) => {
  let device_width = window.innerWidth;

  if (element && device_width > dWidth) {
    return gsap.to(element, {
      scrollTrigger: {
        trigger: element,
        pin: true,
        scrub: true,
        pinSpacing: false,
        start: start || "bottom bottom",
        end: "bottom -=500",
      },
    });
  }
};

export default hasPinContent;
