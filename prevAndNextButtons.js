export const setupPrevNextBtns = (prevBtn, nextBtn, embla) => {
    prevBtn.addEventListener("click", embla.scrollPrev, false);
    nextBtn.addEventListener("click", embla.scrollNext, false);
};

export const disablePrevNextBtns = (prevBtn, nextBtn, embla) => {
    return () => {
        if (embla.canScrollPrev()) prevBtn.removeAttribute("disabled");
        else prevBtn.setAttribute("disabled", "disabled");

        if (embla.canScrollNext()) nextBtn.removeAttribute("disabled");
        else nextBtn.setAttribute("disabled", "disabled");
    };
};
export const setupPrevNextBtnsTwo = (prevBtnTwo, nextBtnTwo, emblaTwo) => {
    prevBtnTwo.addEventListener("click", emblaTwo.scrollPrev, false);
    nextBtnTwo.addEventListener("click", emblaTwo.scrollNext, false);
};

export const disablePrevNextBtnsTwo = (prevBtnTwo, nextBtnTwo, emblaTwo) => {
    return () => {
        if (emblaTwo.canScrollPrev()) prevBtnTwo.removeAttribute("disabled");
        else prevBtnTwo.setAttribute("disabled", "disabled");

        if (emblaTwo.canScrollNext()) nextBtnTwo.removeAttribute("disabled");
        else nextBtnTwo.setAttribute("disabled", "disabled");
    };
};
