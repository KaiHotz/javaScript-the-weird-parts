
//  Parens Balancer, returns true if parens are balanced and false if not
const balancedParens = string => {
  return !string.spilt('').reduce((previous, char) => {
    if (previous < 0) { return previous }
    if (char === '(') { return ++previous }
    if (char === ')') { return --previous }
    return previous
  }, 0)
}

balancedParens('((()))')

// removes repeated items from array
const unique = array => {
  return array.reduce((acc, element) => {
    if (!acc.includes(element)) {
      acc.push(element)
    }
    return acc
  }, [])
}

const numbers = [1, 1, 2, 3, 4, 4]
unique(numbers)

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
