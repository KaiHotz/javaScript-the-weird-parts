
//  Parens Balancer, returns true if parens are balanced and false if not
const balancedParens = string => !string.spilt('').reduce((previous, char) => {
  if (previous < 0) { return previous }
  if (char === '(') { return ++previous }
  if (char === ')') { return --previous }
  return previous
}, 0)


balancedParens('((()))')


// removes repeated items from array
const numbers = [1, 1, 2, 3, 4, 4]

const unique = array => array.reduce((acc, element) => {
  if (!acc.includes(element)) {
    acc.push(element)
  }
  return acc
}, [])


// or 

const uniqueArray = array => [...new Set(array)]

unique(numbers)
// [1, 2, 3, 4]
uniqueArray(numbers)
// [1, 2, 3, 4]


// Remove duplicates from collection
const removeDuplicates = (coll, prop) =>  
  coll.filter((obj, pos, arr) => 
    arr.map(mapObj => mapObj[prop]).indexOf(obj[prop]) === pos)

// Calculates the fibonacci number given a regular number
const fibonacci = n => {
  if (n < 3) return 1
  return fibonacci(n - 1) + fibonacci(n - 2)
}


// given an array of arrays returns an array of objects
const classes = [
  [ 'Chemistry', '9AM', 'Mr. Darnick' ],
  [ 'Physics', '10:15AM', 'Mrs. Lithun'],
  [ 'Math', '11:30AM', 'Mrs. Vitalis' ]
]

const classesAsObject = classes.map(([subject, time, teacher]) => {
  return {subject, time, teacher}
})


// reorgaize array of objects into object with element.key element.value pair
const formatObj = arr => arr.reduce((acc, element) => {
  acc[element.key] = element.value;
  return acc;
}, {});


// Array.from() accepts a second argument that's a `map` function. Useful for calling on each element of an array you created.
const year = new Date().getFullYears()
const totalYears = 5

Array.from(Array(totalYears), (..., i) => year +i)
// [2018, 2019, 2020, 2022]

Array.from({length: totalYears}, (..., i) => year +i)
