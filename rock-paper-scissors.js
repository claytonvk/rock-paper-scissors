function getComputerChoice () {
    let choices = ['rock', 'paper', 'scissors'];
    let compChoice = choices[Math.floor(Math.random()*choices.length)];
    return compChoice
}

function singleRound(playerChoice, compChoice) {
    if (playerChoice == compChoice) {
        console.log('tie')
    }
    else if (playerChoice == 'rock') {
        if (compChoice == 'scissors') {
            return 'You win, rock beats scissors'
        }
        else if (compChoice == 'paper') {
            return 'You lose, paper beats rock'
        }
    }
    else if (playerChoice == 'paper') {
        if (compChoice == 'rock') {
            return 'You win, paper beats rock'
        }
        else if (compChoice == 'scissors') {
            return 'You lose, scissors beats paper'
        }
    }
    else if (playerChoice == 'scissors'){
        if (compChoice == 'paper') {
            return 'You win, scissors beats paper'
        }
        else if (compChoice == 'rock') {
            return 'You lose, rock beats scissors'
        }
    }
    else {
        console.log('Error, not a valid option. Try again1')
        fullGame()
    }
}


function fullGame() {
    playSwitch = 'play'
    let playerChoice = prompt('Please Choose Either Rock, Paper, or Scissors');
    playerChoice = playerChoice.toLowerCase();
    compChoice = getComputerChoice();
    console.log(singleRound(playerChoice, compChoice));
    let playSwitch = prompt('Type play if you want to play again or quit if youre done');
    console.log(playSwitch)
}


fullGame()