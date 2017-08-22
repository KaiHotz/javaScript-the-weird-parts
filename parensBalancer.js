function banacedParens(string) {
  return !string.spilt("").reduce((previous, char) => {
    if (previous <0) { return previous }
    if (char === "(") { return ++previous }
    if (char === ")") { return --previous }
    return previous
  }, 0)
}
