const body = document.querySelector("body");
const buttons = document.querySelectorAll(".button");

buttons.forEach((button) => {
  console.log(button);
  button.addEventListener("click", function (e) {
    // console.log(e);
    body.style.backgroundColor = e.target.id;
  });
});
