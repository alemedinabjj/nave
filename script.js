let optionSelect;
let distanceConverted;

const calculateNaveDistance = () => {
  let nameInput = document.querySelector("#nameNave");
  let nameOfNave = nameInput.value;

  let numberYL = document.querySelector("#numYL");
  let distanceYL = numberYL.value;

  let select = document.getElementById("selectOption");
  let choiceOptions = select.options[select.selectedIndex].value;

  console.log(choiceOptions);

  switch (choiceOptions) {
    case "1":
      optionSelect = "Parsec";
      distanceConverted = distanceYL * 0.306601;

      break;
    case "2":
      optionSelect = "Unidade Astronômica";
      distanceConverted = distanceYL * 63241.1;
      break;
    case "3":
      optionSelect = "Quilômetros";
      distanceConverted = distanceYL * 9.5 * Math.pow(10, 12);
  }

  document.querySelector(
    ".res"
  ).innerHTML = ` Olá ${nameOfNave} \nA Distância em anos luz é ${distanceYL} \n${optionSelect}: ${distanceConverted} `;
};

document.querySelector("#btn").addEventListener("click", () => {
  calculateNaveDistance();
});
