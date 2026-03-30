import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { SplitText } from "@/lib/plugins";

gsap.registerPlugin(ScrollTrigger);

const hasCharAnim = () => {
  const charAnimArray = gsap.utils.toArray(".has_char_anim");
  charAnimArray.forEach((item: any) => {
    try {
      if (item) {
        const stagger_value = item.getAttribute("data-stagger") ?? 0.05;
        const translateX_value = item.getAttribute("data-translateX") ?? 20;
        const translateY_value = item.getAttribute("data-translateY") ?? false;
        const onscroll_value = item.getAttribute("data-on-scroll") ?? 1;
        const data_delay = item.getAttribute("data-delay") ?? 0.1;
        const data_duration = item.getAttribute("data-duration") ?? 1;
        const ease_value = item.getAttribute("data-ease") ?? "power2.out";

        const split = new SplitText(item, { type: "chars, words" });

        const chars = split.chars;

        const excludeChars = item.querySelectorAll(".no-animate");
        const animateChars = Array.from(chars).filter((char: any) => {
          return !Array.from(excludeChars).some((exclude) => {
            const excludeElement = exclude as HTMLElement;
            return excludeElement.contains(char);
          });
        });

        gsap.from(animateChars, {
          delay: data_delay,
          x: translateX_value ? translateX_value : translateY_value ? 0 : 20,
          y: translateY_value ? translateY_value : 0,
          autoAlpha: 0,
          stagger: stagger_value,
          ease: ease_value,
          duration: data_duration,
          scrollTrigger:
            onscroll_value == 1
              ? {
                  trigger: item,
                  start: "top 85%",
                }
              : "",
        });
      }
    } catch (error) {
      console.log("Char anim error: ", error);
    }
  });
};

export default hasCharAnim;
