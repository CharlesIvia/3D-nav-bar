selector(".menu").addEventListener("click", function () {
  this.classList.toggle("open");
});
selector("header").addEventListener("click", function () {
  this.classList.toggle("open");
});
selector(".overlay").addEventListener("click", function () {
  this.classList.toggle("open");
});

function selector(s) {
  return document.querySelector(s);
}
