// code your solution here
function saturdayFun(param = "roller-skate") {
  return `This Saturday, I want to ${param}!`;
}

function mondayWork(param = 'go to the office') {
  return `This Monday, I will ${param}.`;
}

function wrapAdjective(flair = "*") {
  return function inner(def= "special") {
    return `You are ${flair}${def}${flair}!`
  }
}