

export const convertWithBrSpanImg = (data: string) => {
  if (data) {
    const firstReplace = data.replaceAll("{", "<span>");
    const secondReplace = firstReplace.replaceAll("}", "</span>");
    let thirdReplace = secondReplace.replaceAll("<br>", "<br />");

    const allImage = thirdReplace.match(/\[([^\]]*)\]/g);

    if (allImage && allImage.length) {
      for (let i = 0; i < allImage.length; i++) {
        thirdReplace = thirdReplace.replace(
          allImage[i],
          `<img src=${allImage[i].slice(1, -1).split(",")[0]} class='${allImage[i].slice(1, -1).split(",")[1] || ""
          }' alt='image' />`
        );
      }
    }
    const markup = { __html: thirdReplace };
    return markup;
  }
};

export const convertWithBr = (data: string) => {
  if (data) {
    const firstReplace = data.replaceAll("<br>", "<br />");
    const markup = { __html: firstReplace };
    return markup;
  }
};

export const convertWithBrSpan = (data: string, className?: string) => {
  if (data) {
    const spanOpenTag = className ? `<span class="${className}">` : "<span>";

    const firstReplace = data.replaceAll("{", spanOpenTag).replaceAll("}", "</span>");
    const thirdReplace = firstReplace.replaceAll("<br>", "<br />");

    const markup = { __html: thirdReplace };
    return markup;
  }
  return { __html: "" };
};

