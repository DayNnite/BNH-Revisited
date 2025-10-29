const choices = ["bear", "ninja", "hunter"];
    let playerWins = 0;
    let computerWins = 0;

    function showInitial() {
      document.getElementById("initial").hidden = false;
      document.getElementById("results").hidden = true;
    }

    function showResults() {
      document.getElementById("initial").hidden = true;
      document.getElementById("results").hidden = false;
    }

    function randomComputerChoice() {
      const index = Math.floor(Math.random() * choices.length);
      return choices[index];
    }

    function getOutcome(player, cpu) {
      if (player === cpu) return "tie";
      if (
        (player === "bear" && cpu === "ninja") ||
        (player === "ninja" && cpu === "hunter") ||
        (player === "hunter" && cpu === "bear")
      ) {
        return "player";
      }
      return "computer";
    }
    function handleChoice(playerChoice) {
      const cpuChoice = randomComputerChoice();
      const result = getOutcome(playerChoice, cpuChoice);

      if (result === "player") playerWins++;
      else if (result === "computer") computerWins++;

      document.getElementById("playerLine").textContent = "You chose " + playerChoice + ".";
      document.getElementById("computerLine").textContent = "Computer chose " + cpuChoice + ".";
      document.getElementById("resultLine").textContent =
        result === "tie"
          ? "It's a tie!"
          : result === "player"
          ? "You win this round!"
          : "Computer wins this round.";
      document.getElementById("counters").textContent =
        "Wins — You: " + playerWins + " | Computer: " + computerWins;

      showResults();
    }
    function playAgain() {
      showInitial();
    }
    function endSession() {
      playerWins = 0;
      computerWins = 0;
      showInitial();
    }
    window.addEventListener("DOMContentLoaded", showInitial);
