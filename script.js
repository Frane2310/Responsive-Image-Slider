const sliderTabs = document.querySelectorAll(".slider-tab");
const sliderIndicator = document.querySelector(".slider-indicator");

const UpdateIndicator = (tab, index) =>{
    sliderIndicator.style.transform = `translateX(${tab.offsetLeft - 20}px)`; 
    sliderIndicator.style.width = `${tab.getBoundingClientRect().width}px`;
}


//Initialize Swiper
const swiper = new Swiper(".slider-container", {
    effect: "slide",
    speed: 1300,
    //autoplay: { delay: 4000}
    on: {
        //update the indicator on slide change
        slideChange: () => {
            const currentTabIndex = [...sliderTabs].indexOf(sliderTabs[swiper.activeIndex])
            UpdateIndicator(sliderTabs[swiper.activeIndex],currentTabIndex)
        }
    }
});
// Update the slide and indicator on tab click
sliderTabs.forEach((tab, index) => {
    tab.addEventListener("click",() => {
        swiper.slideTo(index);
        UpdateIndicator(tab,index);
    });
});

UpdateIndicator(sliderTabs[0],0);
window.addEventListener("resize", () => UpdateIndicator(sliderTabs[swiper.activeIndex],0));