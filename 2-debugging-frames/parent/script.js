var example = document.querySelector(".example-wrapper");
var spilled = false;

var observerOptions = { threshold: 1 };
var observer = new IntersectionObserver(observeExample, observerOptions);

var colors = {
  0: "rgb(248, 57, 9)",
  1: "rgb(252, 0, 212)",
  2: "rgb(77, 214, 221)"
};

function observeExample(e) {
  e.forEach(function(e) {
    e.isIntersecting ? clean() : tip();
  });
}

function updateBackgroundColor() {
  example.style.backgroundColor = colors[getRandomInteger(3)];
}

function clean() {
  example.classList.remove("spill");
  spilled && example.classList.add("clean");
  spilled = true;
}

function tip() {
  example.classList.add("spill");
  example.classList.remove("clean");
}

function getRandomInteger(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

observer.observe(example);
updateBackgroundColor();

