function average(scores) {
  return Math.round(scores.reduce((x, y) => x+y, 0) / scores.length)

}