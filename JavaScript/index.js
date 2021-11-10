//alert("hej"); //meddelande

function GuesstheNumberGame() {
  let message = confirm("Gissa på ett nummer mellan 1-20"); //CONSOLEN CONFIRM
  let input = prompt("Min gissning är: "); //PROMPT INPUT

  console.log(typeof input);
  let ison = true;
  let number = Math.floor(Math.random() * 21) + 1;
  let roundsToWin = 0;
  while (ison) {
    input = parseInt(input);

    if (input > number) {
      window.confirm("Ange ett lägre tal");
      console.log("ANGE ETT LÄGRE TAL");
      input = window.prompt("Försök med ett nytt nummer");
      roundsToWin += 1;
    } else if (input < number) {
      window.confirm("Ange ett högre tal");
      input = window.prompt("Försök med ett nytt nummer");
      roundsToWin += 1;
    } else {
      window.confirm(
        `Grattis du gissade rätt nummer, din inmatning var ${input} talet var: ${number} \n Du behövde ${roundsToWin} runder för att vinna!`
      );
      ison = false;
    }
  }
}

function higherOrLower() {
  let number = Math.floor(Math.random() * 14) + 1;
  let ison = true;
  let sum = 0;

  while (ison) {
    if (sum === 3) {
      window.alert(`Fan du är bra på det här, du har nu ${sum} rätt i rad`);
    }

    if (sum === 5) {
      window.alert(`Nu är du halvägs ${sum} rätt i rad`);
    }

    if (sum === 10) {
      window.alert(
        `Du är mästare på det här spelet, grattis! du vann hela skitet med ${sum} rätt i rad!`
      );
      ison = false;
    }
    window.alert(
      `Gissa om nästa nummer kommer vara högre eller lägre än ${number}`
    );
    let answer = window.prompt("Högre eller lägre?".toLowerCase());
    let number2 = Math.floor(Math.random() * 13) + 1;

    if (number2 > number && answer === "högre") {
      window.alert(
        `Du vann \n Numret var: ${number} & Du gissade på att ${number2} var högre`
      );
      sum += 1;
    } else if (number2 < number && answer === "lägre") {
      window.alert(
        `Du vann \n Numret var: ${number} & Du gissade på att ${number2} var lägre`
      );
      sum += 1;
    } else if (number === number2) {
      window.alert(
        `Tyvärr du förlorade! Talen var identiska men du gissade rätt ${sum} gånger`
      );
      ison = false;
    } else {
      if (sum === 0) {
        window.alert(
          `Tyvärr du förlorade! Du gissade fel!, Du är kass, du hade ${sum} rätt`
        );
      } else {
        window.alert(
          `Tyvärr du förlorade! Du gissade fel!, men du hade iallafall ${sum} rätt`
        );
      }
      ison = false;
    }

    number = number2;
  }
}

const playMode = () => {
  let ison = true;

  while (ison) {
    let answer = window.prompt(
      "Vilket spel vill du spela? \n [1] Guess the number \n [2] Higher or Lower \n [3] stänga programmet"
    );
    answer = parseInt(answer);

    switch (answer) {
      case 1:
        GuesstheNumberGame();
        break;

      case 2:
        higherOrLower();
        break;

      case 3:
        alert("Bye bye!");
        ison = false;
        break;

      default:
        alert("Detta spelet finns ej ännu tillgängligt för dig!!");
        break;
    }
  }
};
playMode();
