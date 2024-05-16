function getAverage(scores) {
    let all = 0;
  for (let i = 0; i < scores.length; i++) {
  all += scores[i]
  } let average = all / scores.length
  return average
  }
  
  console.log(getAverage([92, 88, 12, 77, 57, 100, 67, 38, 97, 89]));
  console.log(getAverage([45, 87, 98, 100, 86, 94, 67, 88, 94, 95]));