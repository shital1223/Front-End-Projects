window.addEventListener("scroll", () => {
  const scrolled = window.scrollY;
  const totalHeight = document.body.scrollHeight - window.innerHeight;
  const progressPercent = (scrolled / totalHeight) * 100;

  document.querySelector(".scroll-indicator .progress").style.width =
    progressPercent + "%";
});
