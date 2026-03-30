let previousProgress = 0;
let isTouched = false;
export const SpringSLiderEffect = (swiper: any) => {

  const direction = swiper.progress > previousProgress ? "next" : "prev";
  previousProgress = swiper.progress;
  const delay = (swiper.params.speed ?? 0) / 16;

  const visibleSlides = swiper.slides.filter(
    (slide: any) => slide.style.display !== "none"
  );
  const firstIndex = swiper.slides.indexOf(visibleSlides[0]);
  const lastIndex = swiper.slides.indexOf(
    visibleSlides[visibleSlides.length - 1]
  );
  const setDelay = (slideEl: HTMLElement, slideIndex: number) => {
    if (direction === "next" && slideIndex >= firstIndex) {
      slideEl.style.transitionDelay = `${
        (slideIndex - firstIndex + 1) * delay
      }ms`;
    } else if (direction === "prev" && slideIndex <= lastIndex + 1) {
      slideEl.style.transitionDelay = `${
        (lastIndex - slideIndex + 1) * delay
      }ms`;
    } else {
      slideEl.style.transitionDelay = `${0}ms`;
    }
  };

  swiper.slides.forEach((slide: any, index: any) => {
    if (swiper.animating) {
      slide.style.transitionDelay = "0ms";
      requestAnimationFrame(() => {
        setDelay(slide, index);
      });
    } else {
      setDelay(slide, index);
    }
  });
};
