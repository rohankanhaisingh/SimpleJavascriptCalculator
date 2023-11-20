const calculator = document.querySelector(".calculator"),
    calculatorButtons = calculator.querySelectorAll(".calculator__buttons__button"),
    calculatorResults = calculator.querySelector(".calculator__results");

const buttonAllClear = calculator.querySelector(".button-all-clear"),
    buttonCalculate = calculator.querySelector(".button-calculate"),
    buttonDelete = calculator.querySelector(".button-delete-value");

let constructedSum = "";

calculatorButtons.forEach(function(button) {

    if(!button.classList.contains("number") && !button.classList.contains("token")) return;

    button.addEventListener("click", function() {

        const buttonValue = button.innerText;

        calculatorResults.innerText += buttonValue;
        constructedSum += buttonValue;

        calculatorResults.scroll({
            behavior: "smooth",
            left: calculatorResults.scrollWidth
        });
    });
});

buttonCalculate.addEventListener("click", function() {
    try {

        const result = eval(constructedSum);

        calculatorResults.innerText = result.toString();
        constructedSum = result.toString();
    } catch(err) {

        constructedSum = "";
        calculatorResults.innerText = "ONJUISTE WAARDE";
    }
});

buttonAllClear.addEventListener("click", function() {

    constructedSum = "";
    calculatorResults.innerText = "";
});

buttonDelete.addEventListener("click", function() {
   
    const characters = constructedSum.split("");

    characters.pop();

    constructedSum = characters.join("");
    calculatorResults.innerText = characters.join("");
});