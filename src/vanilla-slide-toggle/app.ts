//console.log("log time");

import autoAnimate from "@formkit/auto-animate";

const main = () => {
  const target = document.getElementById("target");
  if (!target) return;

  console.log(autoAnimate);

  autoAnimate(target as HTMLElement);

  document.querySelector("button")?.addEventListener("click", function (e) {
    if (target.classList.contains("hidden")) {
      target.classList.remove("hidden");
    } else {
      target.classList.add("hidden");
    }
  });
};

main();
