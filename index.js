const tutorials = [
  'what does the this keyword mean?',
  'What is the Contutorialuctor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

function titleCased() {
  const upCasedTuts = tutorials.map(tutorial => {
    let tutorialUpCase = tutorial.split(" ").map(word => word[0].toUpperCase() + word.slice(1)).join(" ")
    return tutorialUpCase

  })
  return upCasedTuts
}


// function titleCase(tutorial){
//   return tutorial.split(" ").map(function(word){
//     return word[0].toUpperCase().concat(word.slice(1))
//   })
// }

// let UpCaseTuts = []

// function titleCased(){
//   return tutorials.map(function(tutorial){
//     UpCaseTuts.push(titleCase(tutorial).join(" "))
//   })
//   return UpCaseTuts
// }