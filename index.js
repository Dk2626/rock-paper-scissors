
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
    
    let actionHand = document.querySelector('.actionHand')
    actionHand.style.display = "none"
    
    let contest = document.querySelector('.contest')
    contest.style.display = "flex"
    
    document.getElementById("userPickColor").className = colorOptions[hand]

    document.getElementById("userPickImage").src = handOptions[hand]

    let cphand = pickComputerHand()

    referee(hand, cphand)

    
}

const pickComputerHand = () => {
    let hands = ["rock", "paper", "scissors"]
    let cphand = hands[Math.floor(Math.random() * 3)]


    document.getElementById("computerPickColor").className = colorOptions[cphand]

    document.getElementById("computerPickImage").src = handOptions[cphand]

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
       setDecision("IT'S TIE!")
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
       setDecision("IT'S TIE!")
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
       setDecision("IT'S TIE!")
    }

}

const setDecision = (decision) => {
    document.querySelector(".refree h1").innerText = decision
}

const setScore = (score) => {
    SCORE = score
    document.querySelector(".score h1").innerText = score
}

const restartGame = () => {
     let actionHand = document.querySelector('.actionHand')
    actionHand.style.display = "flex"
    
    let contest = document.querySelector('.contest')
    contest.style.display = "none"
}

const openRulesModal = () => {
     let rulesModal = document.querySelector('.rulesModalMain')
    rulesModal.style.display = "flex"
}

const closeRulesModal = () => {
     let rulesModal = document.querySelector('.rulesModalMain')
    rulesModal.style.display = "none"
}
