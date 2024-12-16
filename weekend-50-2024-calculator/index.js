let currentInput = "0";
let memory = 0;
const display = document.getElementById("result");

document.querySelectorAll("button").forEach((button) => {
  button.addEventListener("click", () => {
    button.classList.add("pressed");
    setTimeout(() => button.classList.remove("pressed"), 200);

    const value = button.textContent;

    if (!isNaN(value) || value === ".") {
      if (currentInput === "0" && value !== ".") {
        currentInput = value;
      } else {
        currentInput += value;
      }
      display.textContent = currentInput;
    } else {
      switch (value) {
        case "AC":
          currentInput = "0";
          memory = 0;
          operator = null;
          break;
        case "DEL":
          currentInput = currentInput.slice(0, -1) || "0";
          break;
        case "=":
          try {
            currentInput = evaluateExpression(currentInput);
          } catch {
            currentInput = "Error";
          }
          break;
        case "sin":
          currentInput = Math.sin(parseFloat(currentInput)).toString();
          break;
        case "cos":
          currentInput = Math.cos(parseFloat(currentInput)).toString();
          break;
        case "tan":
          currentInput = Math.tan(parseFloat(currentInput)).toString();
          break;
        case "√":
          currentInput = Math.sqrt(parseFloat(currentInput)).toString();
          break;
        case "π":
          currentInput = Math.PI.toString();
          break;
        default:
          currentInput += value;
      }
      display.textContent = currentInput;
    }
  });
});

function evaluateExpression(expr) {
  expr = expr.replace("×", "*").replace("÷", "/");
  return new Function("return " + expr)();
}
