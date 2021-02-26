/* main scripts */

/* embla carousel */
import {
    setupPrevNextBtns,
    disablePrevNextBtns,
    setupPrevNextBtnsTwo,
    disablePrevNextBtnsTwo,
} from "./prevAndNextButtons.js";
import { setupDotBtns, generateDotBtns, selectDotBtn } from "./dotButtons.js";

/* Slider one -- start */
const wrap = document.querySelector(".embla.on-demand-care__carousel");
const emblaNodeOne = wrap.querySelector(
    ".embla__viewport.on-demand-care__viewport"
);
const embla = EmblaCarousel(emblaNodeOne);
const prevBtn = wrap.querySelector(".embla__button--prev");
const nextBtn = wrap.querySelector(".embla__button--next");
const dots = document.querySelector(".embla__dots");
const totalSlides = wrap.querySelectorAll(".total-slides");
const currentSlider = wrap.querySelectorAll(".current-slider");
const emblaSliders = document.querySelectorAll(".embla__slide");
totalSlides.forEach((elements) => {
    elements.innerHTML = emblaSliders.length;
});
currentSlider.forEach((element, index) => {
    if (index === 0) {
        element.innerHTML = 1;
    } else {
        element.innerHTML = index + 1;
    }
});

const dotsArray = generateDotBtns(dots, embla);
const setSelectedDotBtn = selectDotBtn(dotsArray, embla);
const disablePrevAndNextBtns = disablePrevNextBtns(prevBtn, nextBtn, embla);

setupPrevNextBtns(prevBtn, nextBtn, embla);
setupDotBtns(dotsArray, embla);

embla.on("select", setSelectedDotBtn);
embla.on("select", disablePrevAndNextBtns);
embla.on("init", setSelectedDotBtn);
embla.on("init", disablePrevAndNextBtns);
/* Slider one -- end */

/* Slider two -- start */
const wrapTwo = document.querySelector(".embla.clients-say__carousel");
const emblaNodeTwo = wrapTwo.querySelector(
    ".embla__viewport.clients-say__viewport"
);
const emblaTwo = EmblaCarousel(emblaNodeTwo);
const prevBtnTwo = wrapTwo.querySelector(
    ".embla__button--prev.clients-say__button--prev"
);
const nextBtnTwo = wrapTwo.querySelector(
    ".embla__button--next.clients-say__button--next"
);
const disablePrevAndNextBtnsTwo = disablePrevNextBtnsTwo(
    prevBtnTwo,
    nextBtnTwo,
    emblaTwo
);
setupPrevNextBtnsTwo(prevBtnTwo, nextBtnTwo, emblaTwo);

emblaTwo.on("select", disablePrevAndNextBtnsTwo);
emblaTwo.on("init", disablePrevAndNextBtnsTwo);
/* Slider two -- end */
