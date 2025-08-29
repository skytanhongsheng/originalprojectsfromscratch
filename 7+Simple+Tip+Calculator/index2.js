function setTip(value) {
  document.querySelector("#tipPercentage").value = value;
}

function calculateTip() {
  let billAmount = parseFloat(document.querySelector("#billAmount").value);
  let tipPercentage = parseFloat(
    document.querySelector("#tipPercentage").value
  );

  if (isNaN(billAmount) || billAmount <= 0) {
    alert("Please enter bill amount");
    return;
  }

  if (isNaN(tipPercentage) || tipPercentage < 0) {
    alert("Please enter tip percentage");
    return;
  }

  let tipAmount = (billAmount * tipPercentage) / 100;
  let totalBill = billAmount + tipAmount;

  let displayBill = document.querySelector(".calculate");
  displayBill.innerHTML = `
        <strong>Tip Amount</strong> $${tipAmount} <br>
        <strong>Total Bill</strong> $${totalBill}
    `;
}
