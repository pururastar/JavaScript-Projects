// Get display element
const display = document.getElementById("display");

// Initialize variables
let operand1 = "";
let operand2 = "";
let operator = "";

// Add click event listeners to buttons
document.querySelectorAll("button").forEach(button => {
    button.addEventListener("click", function(e) {
        const value = e.target.getAttribute("data-value");
        const type = e.target.getAttribute("data-type");

        if (type === "number") {
            if (!operator) {
                operand1 += value;
                display.value = operand1;
            } else {
                operand2 += value;
                display.value = operand2;
            }
        }

        if (type === "operation") {
            operator = value;
        }

        if (type === "equals") {
            operand1 = parseFloat(operand1);
            operand2 = parseFloat(operand2);
            let result = 0;

            switch (operator) {
                case "+":
                    result = operand1 + operand2;
                    break;
                case "-":
                    result = operand1 - operand2;
                    break;
                case "*":
                    result = operand1 * operand2;
                    break;
                case "/":
                    if (operand2 !== 0) {
                        result = operand1 / operand2;
                    } else {
                        result = "Error";
                    }
                    break;
                default:
                    result = "Error";
            }

            display.value = result;
            operand1 = result;
            operand2 = "";
            operator = "";
        }

        if (type === "clear") {
            operand1 = "";
            operand2 = "";
            operator = "";
            display.value = "";
        }
    });
});
