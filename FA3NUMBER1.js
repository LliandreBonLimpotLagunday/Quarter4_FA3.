function getNumberInput() {
  let input;
  do {
    input = prompt("Please enter a number:");
  } while (isNaN(input) || input.trim() === "");

  return parseInt(input);
}

function generateShape() {
  const num = getNumberInput();
  const outputDiv = document.getElementById("shape-output");
  let result = `Number inputted: ${num}<br><br>`;

  if (num % 2 === 1) {

    for (let i = num; i >= 1; i--) {
      result += (i + " ").repeat(num).trim() + "<br>";
    }
  } else {
   
    for (let i = num; i >= 1; i--) {
      result += (i + " ").repeat(i).trim() + "<br>";
    }
  }

  outputDiv.innerHTML = result;
}

generateShape();
