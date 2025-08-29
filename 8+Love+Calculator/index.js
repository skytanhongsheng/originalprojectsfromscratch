function display() {
  let yourName = document.querySelector("#yourName").value;
  let partnerName = document.querySelector("#partnerName").value;
  console.log(yourName);

  if (yourName === "" || partnerName === "") {
    alert("Please enter both names");
    return;
  }

  let randomPercentage = Math.floor(Math.random() * 101 );
  console.log(randomPercentage)

  let results = document.querySelector(".results");
  results.innerHTML = `
    ${yourName} ❤️ ${partnerName} = ${randomPercentage}%;
  `
}
