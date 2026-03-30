import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { SplitText } from "@/lib/plugins";

gsap.registerPlugin(ScrollTrigger);

const hasTextMovAnim = () => {
  const textMoveArray = gsap.utils.toArray(".has_text_mov_anim");
  textMoveArray.forEach((item: any) => {
    try {
      if (item) {
        const delayValue = item.getAttribute("data-delay") ?? 0.1;

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
            scrub: false,
            markers: false,
            toggleActions: "play none none none",
          },
        });

        const itemSplitted = new SplitText(item, { type: "lines" });

        gsap.set(item, { perspective: 400 });

        tl.from(itemSplitted.lines, {
          duration: 1,
          delay: delayValue,
          opacity: 0,
          rotationX: -80,
          force3D: true,
          transformOrigin: "top center -50",
          stagger: 0.1,
        });
      }
    } catch (error) {
      console.error("Error in hasImageReveal:", error);
    }
  });
};

export default hasTextMovAnim;
