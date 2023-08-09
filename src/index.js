import "./styles.css";
var buttons = document.getElementsByClassName("button");
var show = document.getElementById("show");
var operand1 = 0;
var operand2 = null;
var opperator = null;

for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    var value = this.getAttribute("data-value");

    if (value == "+") {
      opperator = "+";
      operand1 = parseFloat(show.textContent);
      show.innerText = "";
    } else if (value == "=") {
      operand2 = parseFloat(show.textContent);
      console.log(operand1);
      var result = eval(operand1 + opperator + operand2);
      show.innerText = result;
    } else if (value == "ac") {
      show.innerText = "";
      operand1 = parseFloat(show.textContent);
    } else if (value == "-") {
      opperator = "-";
      operand1 = parseFloat(show.textContent);
      show.innerText = "";
    } else if (value == "/") {
      opperator = "/";
      operand1 = parseFloat(show.textContent);
      show.innerText = "";
    } else if (value == "*") {
      opperator = "*";
      operand1 = parseFloat(show.textContent);
      show.innerText = "";
    } else if (value == "%") {
      opperator = "%";
      operand1 = parseFloat(show.textContent);
      show.innerText = "";
    } else if (value == "+/-") {
      show.innerText = -show.innerText;
    } else if (value == "." && !show.innerText.includes(".")) {
      show.innerText = show.innerText + ".";
      operand1 = parseFloat(show.textContent);
    } else if (value >= 0 && value <= 9) {
      show.innerText += value;
    }
  });
}
