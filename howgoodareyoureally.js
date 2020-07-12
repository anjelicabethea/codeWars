function betterThanAverage(classPoints, yourPoints) {
  // Your code here

  let sum = 0;

  classPoints.forEach(el => sum += el)

  if(sum / classPoints.length < yourPoints ) { return true} else {return false}

}
