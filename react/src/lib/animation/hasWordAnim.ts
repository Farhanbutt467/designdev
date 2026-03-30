import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { SplitText } from "@/lib/plugins";
gsap.registerPlugin(ScrollTrigger);

export default function hasWordAnim() {
  const wordAnimArray = gsap.utils.toArray(".has_word_anim");

  wordAnimArray.forEach((item: any) => {
    try {
      if (item) {
        const stagger_value = item.getAttribute("data-stagger") ?? 0.05;
        const translateX_value = item.getAttribute("data-translateX") ?? 20;
        const translateY_value = item.getAttribute("data-translateY") ?? false;
        const onscroll_value = item.getAttribute("data-on-scroll") ?? 1;
        const data_delay = item.getAttribute("data-delay") ?? 0.1;

        const split = new SplitText(item, { type: "chars, words" });

        const words = split.words;

        const excludeWords = item.querySelectorAll(".no-animate");
        const animateWords = Array.from(words).filter((word: any) => {
          return !Array.from(excludeWords).some((exclude) => {
            const excludeElement = exclude as HTMLElement;
            return excludeElement.contains(word);
          });
        });

        gsap.from(animateWords, {
          duration: 1,
          x: translateX_value ? translateX_value : translateY_value ? 0 : 20,
          y: translateY_value ? translateY_value : 0,
          autoAlpha: 0,
          stagger: stagger_value,
          delay: data_delay,
          scrollTrigger:
            onscroll_value == 1
              ? {
                  trigger: item,
                  start: "top 90%",
                }
              : "",
        });
      }
    } catch (error) {
      console.log("Word anim error: ", error);
    }
  });
}
