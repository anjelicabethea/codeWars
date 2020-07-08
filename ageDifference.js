function differenceInAges(ages) {
  let oldest = Math.max.apply(null, ages)
  let youngest = Math.min.apply(null, ages)
  let difference = oldest - youngest
  let answer = [youngest, oldest, difference]
  return answer
}
