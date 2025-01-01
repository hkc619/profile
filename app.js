const schoolButton = document.getElementById("schoolButton");
const workButton = document.getElementById("workButton");
const toolButton = document.getElementById("toolButton");

const schoolPage = document.getElementById("school");
const workPage = document.getElementById("work");
const toolPage = document.getElementById("tool");

schoolButton.addEventListener("click", () => {
  //更改id或class 讓其他的變成 -noshow opacity=100  這個變成 -show opacity=0
  schoolPage.classList.add("show");
  workPage.classList.add("noshow");
  toolPage.classList.add("noshow");

  schoolPage.classList.remove("noshow");
  workPage.classList.remove("show");
  toolPage.classList.remove("show");
});
workButton.addEventListener("click", () => {
  schoolPage.classList.add("noshow");
  workPage.classList.add("show");
  toolPage.classList.add("noshow");

  schoolPage.classList.remove("show");
  workPage.classList.remove("noshow");
  toolPage.classList.remove("show");
});
toolButton.addEventListener("click", () => {
  schoolPage.classList.add("noshow");
  workPage.classList.add("noshow");
  toolPage.classList.add("show");

  schoolPage.classList.remove("show");
  workPage.classList.remove("show");
  toolPage.classList.remove("noshow");
});
