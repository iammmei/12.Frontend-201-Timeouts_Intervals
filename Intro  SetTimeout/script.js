// setTimeout: Run code with a time delay  (function, time delay)

let counter = 0;

// setTimeout(function () {
//   counter++;
//   console.log(counter);
// }, 2000);

// Same thing but externalized functionµ

// USEFUL TO CANCEL OR DO REDIRECTION ON WEBSITES
const timerID = setTimeout(function () {
  window.location.href = "https://google.com";
}, 2000);

const btn = document.getElementById("btn");
btn.addEventListener("click", function () {
  clearTimeout(timerID);
  console.log("Redirect cancelled");
});

// setTimeout(incrementByOne, 2000);
// function incrementByOne() {
//   counter++;
//   console.log(counter);
// }

// setInterval : Repeatedly run code at every time interval

// setInterval(incrementByOne, 1000);

// const intervalID = setInterval(function () {
//   incrementByOne();
//   if (counter === 10) {
//     clearInterval(intervalID);
//     console.log("clear interval ");
//   }
// }, 200);

//setInterval : Repeatedly run code at everytime interval
