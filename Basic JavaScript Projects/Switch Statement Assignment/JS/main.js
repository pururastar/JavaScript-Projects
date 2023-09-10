document.addEventListener('DOMContentLoaded', (event) => {
    let animal = "Dog"; // You can change this to test different cases
    let message;

    switch (animal) {
        case "Dog":
            message = "Dogs are loyal.";
            break;
        case "Cat":
            message = "Cats are independent.";
            break;
        case "Fish":
            message = "Fish live underwater.";
            break;
        default:
            message = "I don't have information on that animal.";
            break;
    }

    document.getElementById("result").innerHTML = message;
});
