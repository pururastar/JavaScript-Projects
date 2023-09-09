function checkEligibility() {
    const ageInput = document.getElementById("ageInput").value;
    const resultElement = document.getElementById("result");

    const message = ageInput >= 18 ? "You can vote!" : "You are not old enough to vote";
    
    resultElement.textContent = message;
}
