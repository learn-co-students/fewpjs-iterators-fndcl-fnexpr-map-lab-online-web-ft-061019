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

const titleCased = () => {
  
  return tutorials.map( tutorial => {
    let eachWordArray = tutorial.split(' ')
    let capWordsArray = eachWordArray.map( eachWord => upperCaseFirstLetter(eachWord))
    let newStrings = capWordsArray.join(' ')
    return newStrings
  })
}

function upperCaseFirstLetter(tutorial){
  return tutorial.charAt(0).toUpperCase() + tutorial.substring(1)
}
//const lower = 'this is an entirely lowercase string';
//const upper = lower.charAt(0).toUpperCase() + lower.substring(1);

