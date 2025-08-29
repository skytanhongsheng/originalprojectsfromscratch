function setTip(value) {
    document.querySelector("#tipPercentage").value = value;
}

function calculateTip() {
    let billAmount = parseFloat(document.querySelector("#billAmount").value)
    let tipPercentage = parseFloat(document.querySelector("#tipPercentage").value)
    
    // Validate Inputs
    if (isNaN(billAmount) || billAmount <=0) {
        alert("Please enter a valid bill amount!")
        return;
    }

    if (isNaN(tipPercentage) || tipPercentage < 0) {
        alert("Please enter a valid tip percentage!");
        return;
    }

    // Calculate tip and total
    let tipAmount = (billAmount * tipPercentage) / 100;
    let totalBill = billAmount + tipAmount;

    // Display result
    let resultDiv = document.querySelector(".result");
    resultDiv.innerHTML = `
        <strong>Tip Amount:</strong> $${tipAmount.toFixed(2)} <br>
        <strong>Total Bill:</strong> $${totalBill.toFixed(2)}
    `
}