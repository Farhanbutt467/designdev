import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const hasCountAnim = () => {
  const countAnimArray = gsap.utils.toArray(".has_count_anim");
  countAnimArray.forEach((item: any) => {
    try {
      if (item) {
        const count_value = item.getAttribute("data-count") ?? 0;

        ScrollTrigger.create({
          trigger: item,
          start: "bottom bottom",
          once: true,
          onEnter: () => {
            gsap.fromTo(
              item,
              { textContent: 0 },
              {
                textContent: count_value,
                duration: 1.5,
                ease: "power1.inOut",
                snap: { textContent: 1 },
              }
            );
          },
        });
      }
    } catch (error) {
      console.error("Error in hasCountAnim:", error);
    }
  });
};

export default hasCountAnim;
