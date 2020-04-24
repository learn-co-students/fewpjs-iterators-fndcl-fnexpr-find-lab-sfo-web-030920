const testVar = {}

function superbowlWin(arr){
  let winner = arr.find((rec) => rec.result === 'W')
  if (!winner) {
    return
  }
  return winner.year
}