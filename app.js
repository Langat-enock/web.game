const computerChoiceDisplay= document.getElementById('computer-choice')
const userchoice= document.getElementById('user-choice')
const resultDisplay= document.getElementById('result')
const possibleChoice = document.querySelectorAll('button')
let userChoice
let computerChoice
let result
possibleChoice.forEach(possibleChoice => possibleChoice.addEventListener('click', (e)  => 
{

    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComperCoice()
}))

function generateComperCoice(){
    const randomnumber =math.floor(math.random() * 3) // or use possibleChoice.length
console.log(randomnumber)

if(randomnumber === 1) {
    computerChoice = 'rock'
}
    if(randomnumber === 2) {
        computerChoice = 'scissor'
    }
        if(randomnumber === 3) {
            computerChoice = 'paper'
        
    
}
computerChoiceDisplay.innerHTML = computerChoice
    
}
function getResult(){
  if(computerChoice === userChoice)  {
    result ='you win'
  }
    if(computerChoice === 'paper' && userChoice ==="paper")  {
        result ='you win'
    }
        if(computerChoice === 'rock' && userChoice === "scissor")  {
            result ='you lose'}
            if(computerChoice === 'scissor' && userChoice === "rock")  {
                result ='you win'
                if(computerChoice === 'scissor' && userChoice === "paper")  {
                    result ='you lose'
                
            }
  }
  resultDisplay.innerHTML = result
}