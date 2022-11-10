"use strict";

const imgTargets = document.querySelectorAll("img[data-src]");

// console.log(imgTargets);

const imgLoad = function (entries, observer) {
  entries.forEach((entry) => {
    console.log(entry);
  });
  // console.log(entries);
  const [entry] = entries;
  if (!entry.isIntersecting) return;

  // Replace src with data-src
  entry.target.src = entry.target.dataset.src;
  entry.target.addEventListener("load", function () {
    entry.target.classList.remove("lazy-img");
  });

  observer.unobserve(entry.target);
};

const obsOptions = {
  root: null,
  threshold: 0,
  rootMargin: "-200px",
};

const imgObserver = new IntersectionObserver(imgLoad, obsOptions);

imgTargets.forEach((img) => imgObserver.observe(img));
