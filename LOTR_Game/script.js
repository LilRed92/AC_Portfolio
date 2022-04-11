
import characterData from "./data.js"
import Character from "./Character.js"
import {getDiceRollArray, getDicePlaceholderHtml} from "./utils.js"

//EXERCISE 7


let monsterArray = ["orc", "smeagol", "cavetroll"]
const wizard = new Character(characterData.hero)
let monster = getNewMonster()

document.getElementById("attack-button").addEventListener("click", attack)

function getNewMonster() {
  const nextMonsterData = characterData[monsterArray.shift()]
  return nextMonsterData ? new Character(nextMonsterData) : {}
}

function attack() {
  wizard.getDiceHtml()
  monster.getDiceHtml()
  wizard.takeDamage(monster.currentDiceScore)
  monster.takeDamage(wizard.currentDiceScore)
  display()
  if(wizard.dead) {
    endGame()
  } else if(monster.dead) {
    if(monsterArray.length > 0) {
      monster = getNewMonster()
      display()
    } else {
      endGame()
    }
  }
}

function endGame() {
  let endMessage = wizard.health === 0 && monster.health === 0 ? "No one wins. Thermonuclear war." : wizard.health > 0 ? "Gandalf wins!" : "Monster wins."

  const endEmoji = wizard.health > 0 ? "🎩" : "👻"
  document.body.innerHTML =
    `<div class = "end-game">
      <h2>Game Over</h2>
      <h3>${endMessage}</h3>
      <p class = "end-emoji">${endEmoji}</p>
    </div>`
  //let endMessage = ""
  // if(wizard.health === 0 && orc.health === 0) {
  //   endMessage = "No one wins. Thermonuclear war."
  // } else if (wizard.health > 0) {
  //   endMessage = "Gandalf wins!"
  // } else {
  //   endMessage = "Orc wins."
  // }
  // console.log("The game is over.")

}

function display() {
  document.getElementById("hero").innerHTML = wizard.getCharacterHtml()
  document.getElementById("monster").innerHTML = monster.getCharacterHtml()
}

display()





// function renderCharacter(data) {
//   const {elementId, name, avatar, health, diceCount} = data
//   const diceHtml = getDiceHTML(diceCount)
//
//   document.getElementById(elementId).innerHTML = `
//     <div class="character-card">
//     <h4 class="name"> ${name} </h4>
//     <img class="avatar" src="${avatar}">
//     <p class="health">health: <b> ${health} </b></p>
//     <div class="dice-container">${diceHtml}</div>
//     </div>
// `
// }
//
// renderCharacter(hero)
// renderCharacter(monster)


//EXERCISE 3
// const dreamVacation = {
//   destination: "Moraine Lake, Rocky Mountains, Canada",
//   activity: "camping, hiking, and swimming",
//   companion: "my furbabies, Bella & Thyri for sure. Maybe some humans as well, most likely of the familial variety.",
//   when: "mid-summer",
//   duration: "2-4 weeks"
// }
//
// const {destination, activity, companion, when, duration} = dreamVacation
//
// console.log(`My dream vacation would be to travel to ${destination} during the ${when} for ${duration}. I would bring along with me ${companion} So we could all go ${activity}.`)


//EXERCISE 4
// function getDiceRollArray(diceCount) {
//   const newDiceRolls = []
//   for (let i = 0; i < diceCount; i++) {
//     newDiceRolls.push(Math.floor(Math.random() * 6) + 1 )
//   }
//   return newDiceRolls
// }
//
// console.log(getDiceRollArray(3))


//EXERCISE 5


//EXERCISE 8


//EXERCISE 9


//EXERCISE 10


//EXERCISE 11


//EXERCISE 12


//EXERCISE 13


//EXERCISE 14
