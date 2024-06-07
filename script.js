let rollResult = document.getElementById("rollResult");
let dieOptions = document.getElementById("dieOptions");
let dieNum = document.getElementById("dieNum");
let maxRoll = 0;
let bigRoll = 0;

function Roller(numberOfDice, CritZone) {
    if(numberOfDice=="" || numberOfDice==undefined){
        numberOfDice=1;
    }
    // console.log(dieNum.value);
    // console.log(CritZone);
  console.log(`Number of Dice: ${numberOfDice}\nMax Roll per Die: ${CritZone}`);
  if (numberOfDice <= 0) {
    alert("Only positive numbers, please.");
  } else {
    console.log(
      `Number of Dice: ${numberOfDice}\nMax Roll per Die: ${CritZone}`
    );
    for (let i = 0; i<numberOfDice; i++){
        let nextRoll = Math.floor(Math.random() * CritZone)+1;
        console.log(nextRoll);
        if(nextRoll == 0){
            nextRoll+=nextRoll+1;
        }
        bigRoll += nextRoll;
        console.log(`Roll Number ${i+1}: ${nextRoll}\nTotal: ${bigRoll}`);
    }
    if (bigRoll <= 0) {
      bigRoll += 1;
    }
    console.log("Total Roll: "+ bigRoll);
    numScramble();
    console.log("Scramble Done");
    setTimeout(function(){rollResult.textContent = bigRoll}, 500);
    console.log("Roll Done");
  }
}

function rollerStart() {
    bigRoll = 0;
    maxRoll = dieOptions.value;
    Roller(dieNum.value, maxRoll);
  }

// class Dice{
//     constructor(name, maxRoll){
//         this.name = name
//         this.maxRoll = maxRoll;
//     }
// }

function numScramble(){
    let numDelay = 0;
    for(let i = 0; i<20; i++){
        setTimeout(function(){rollResult.textContent = (Math.floor(Math.random()*(dieNum.value*maxRoll)))}, numDelay);
        i++;
        numDelay += 50;
    }
}
