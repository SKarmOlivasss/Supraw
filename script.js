let parent = document.getElementById("parent");
let parent2 = document.getElementById("parent2");
let product = document.getElementById("product");
window.addEventListener("scroll", function () {
  let value = window.scrollY;
  parent.style.bottom = value * 0.4 + "px";
  parent2.style.top = -150 + value * -0.06 + "px";
  product.style.top = value * -0.52 + "px";
});
