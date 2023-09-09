function checkNumber() {
    const userNumber = document.getElementById("userNumber").value;
    const resultParagraph = document.getElementById("result");

    if (userNumber % 2 === 0) {
        resultParagraph.textContent = userNumber + " is even.";
    } else {
        resultParagraph.textContent = userNumber + " is odd.";
    }
}
