"use strict";

const imgTargets = document.querySelectorAll("img[data-src]");

// console.log(imgTargets);

const imgLoad = function (entries, observer) {
  // entries.forEach((entry) => {
  //   console.log(entry);
  // });
  // console.log(entries);
  const [entry] = entries;
  if (!entry.isIntersecting) return;

  // Replace src with data-src
  entry.target.src = entry.target.dataset.src;
  entry.target.addEventListener("load", function () {
    entry.target.classList.remove("lazy-img");
  });

  // Unboserving elements after loading them
  observer.unobserve(entry.target);
};

// Intersection observer options object
const obsOptions = {
  root: null,
  threshold: 0,
};

// Intersection Observer function
const imgObserver = new IntersectionObserver(imgLoad, obsOptions);

// Loop to obeserve each object
imgTargets.forEach((img) => imgObserver.observe(img));
