const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    console.log("You clicked" + index);
    wrapper.style.transform = `translateX(${-100 * index}vw)`;
  });
});
