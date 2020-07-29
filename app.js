const counter = document.querySelector(".counter");
const increaseBtn = document.querySelector(".increase");
const decreaseBtn = document.querySelector(".decrease");

function Count() {
  let number = 0;

  this.increase = () => {
    number++;
    counter.innerText = number;
    counter.style.fontSize = "6rem";
  };
  this.decrease = () => {
    if (number === 0) return;
    number--;
    counter.innerText = number;
    counter.style.fontSize = "4rem";
  };
  counter.addEventListener("transitionend", () => {
    counter.style.fontSize = "5rem";
  });
}

const count = new Count();

increaseBtn.addEventListener("click", count.increase);
decreaseBtn.addEventListener("click", count.decrease);
