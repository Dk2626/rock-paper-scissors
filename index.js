
const handOptions = {
    "rock": "./images/icon-rock.svg",
    "paper": "./images/icon-paper.svg",
    "scissors": "./images/icon-scissors.svg"
}
const colorOptions = {
    "rock": "rock action",
    "paper": "paper action",
    "scissors": "scissors action"
}

let SCORE = 0

const pickUserHand = (hand) => {
    console.log(hand)
    
    let actionHand = document.querySelector('.actionHand')
    actionHand.style.display = "none"
    
    let contest = document.querySelector('.contest')
    contest.style.display = "flex"
    
    document.getElementById("userPickColor").className = colorOptions[hand]
    console.log(`colorOptions`, colorOptions[hand])

    document.getElementById("userPickImage").src = handOptions[hand]
    console.log(`handOptions`, handOptions[hand])

    let cphand = pickComputerHand()

    referee(hand, cphand)

    
}

const pickComputerHand = () => {
    let hands = ["rock", "paper", "scissors"]
    let cphand = hands[Math.floor(Math.random() * 3)]

    console.log(cphand)

    document.getElementById("computerPickColor").className = colorOptions[cphand]
    console.log(`colorOptions`, colorOptions[cphand])

    document.getElementById("computerPickImage").src = handOptions[cphand]
    console.log(`handOptions`, handOptions[cphand])

    return cphand
}

const referee = (userHand, cpHand) => {
    if(userHand == "paper" && cpHand == "scissors"){
       setDecision("YOU LOSE!")
       if(SCORE !== 0){
           setScore(SCORE - 1)
       }
    }
    if(userHand == "paper" && cpHand == "rock"){
       setDecision("YOU WIN!")
       setScore(SCORE + 1)
    }
    if(userHand == "paper" && cpHand == "paper"){
       setDecision("TIE!")
    }
    if(userHand == "scissors" && cpHand == "paper"){
       setDecision("YOU WIN!")
       setScore(SCORE + 1)
    }
    if(userHand == "scissors" && cpHand == "rock"){
       setDecision("YOU LOSE!")
       if(SCORE !== 0){
           setScore(SCORE - 1)
       }
    }
    if(userHand == "scissors" && cpHand == "scissors"){
       setDecision("TIE!")
    }
    if(userHand == "rock" && cpHand == "scissors"){
       setDecision("YOU WIN!!")
       setScore(SCORE + 1)
    }
    if(userHand == "rock" && cpHand == "paper"){
       setDecision("YOU LOSE!")
       if(SCORE !== 0){
           setScore(SCORE - 1)
       }
    }
    if(userHand == "rock" && cpHand == "rock"){
       setDecision("TIE!")
    }

}

const setDecision = (decision) => {
    console.log(decision)
    document.querySelector(".refree h1").innerText = decision
}

const setScore = (score) => {
    console.log(score)
    SCORE = score
    document.querySelector(".score h1").innerText = score
}

const restartGame = () => {
     let actionHand = document.querySelector('.actionHand')
    actionHand.style.display = "flex"
    
    let contest = document.querySelector('.contest')
    contest.style.display = "none"
}