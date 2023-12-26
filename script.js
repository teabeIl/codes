const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const yeslink = document.querySelector(".yes-link");
const background = document.querySelector(".background");

yesBtn.addEventListener("click", () => {
  question.innerHTML = "That's cool! I still love you. Btw, wanna see something else?";
  yesBtn.style.visibility = "hidden";
  noBtn.style.visibility = "hidden";
  yeslink.style.visibility = "visible";
  document.body.style.background = "url(https://i.pinimg.com/originals/a7/57/d2/a757d203a381c5628bddfa55af3094b1.gif)";
  document.body.style.backgroundSize = "cover";
});

noBtn.addEventListener("mouseover", () => {
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});