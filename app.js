var startButton = document.querySelector("#js--start");
var stopButton = document.querySelector("#js--stop");
var stopwatch = document.querySelector("#js--stopwatch");

var mil = 0;
var displayMil = "00";
var seconds = 0;
var displaySeconds = "00";

startButton.addEventListener("click", function() {
  var timer = setInterval(function() {
    mil = mil + 1;

    if (mil === 99) {
      mil = 0;
      seconds = seconds + 1;
    }

    if (mil < 10) {
      displayMil = "0" + mil;
    } else {
      displayMil = mil.toString();
    }

    if (seconds < 10) {
      displaySeconds = "0" + seconds;
    } else {
      displaySeconds = seconds.toString();
    }

    stopwatch.innerHTML = displaySeconds + "." + displayMil;
  }, 10);

  stopButton.addEventListener("click", function() {
    clearInterval(timer);
  });
});
